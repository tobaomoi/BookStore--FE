import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import callApi from "../../../api";
import { useHistory } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);



export default function SignUpForm(props) {
  const [message, setMessage] = useState("");
  const [signUpData, setSignUpData] = useState({
    email: "",
    userName: "",
    passWord: "",
    confirmPassWord: "",
    phoneNumber: "",
  });

  const handleGetSignUpData = (event) => {
    setMessage("");
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
    console.log(signUpData);
  };

  const handleUserSignUp = (event) => {
    event.preventDefault();
    callApi
      .post("/users/signUp", signUpData)
      .then((result) => {
        setMessage(result.data.message);
        console.log("data", result.data);
      })
      .catch((err) => {
        setMessage(err.response.data.error);
        console.log(err);
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseBtn = () => {
    setTimeout(()=> setOpen(false),1000)
  };
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Đăng ký
    </Button>
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle className="mx-auto" id="customized-dialog-title" onClose={handleClose}>
        ĐĂNG KÝ
      </DialogTitle>
      <DialogContent dividers>
      <div >
              <form
                id="signInForm"
                onSubmit={handleUserSignUp}
                className="sign_In_Form"
                autoComplete="off"
              >
                <div className="input-container">
                  <label htmlFor="ename">Email:</label>
                  <input
                    onChange={handleGetSignUpData}
                    id="email"
                    name="email"
                    placeholder="Please enter your email ..."
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="ename">UserName:</label>
                  <input
                    onChange={handleGetSignUpData}
                    id="userName"
                    name="userName"
                    placeholder="Please enter your name ..."
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="password">Password:</label>
                  <input
                    onChange={handleGetSignUpData}
                    id="passWord"
                    name="passWord"
                    placeholder="Please enter your password ..."
                    type="password"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="password">Confirm Password:</label>
                  <input
                    onChange={handleGetSignUpData}
                    id="confirmPassWord"
                    name="confirmPassWord"
                    placeholder="Please enter your confirm password ..."
                    type="password"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="ename">Phone Number:</label>
                  <input
                    onChange={handleGetSignUpData}
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Please enter your phone number ..."
                  />
                </div>
                <p id="notification">{message}</p>
                
                <button className="singup-btn" type="submit" onClick={handleCloseBtn}>
                  Sign up
                </button>
              </form>
              <form action="">

              </form>
            </div>
      </DialogContent>
    </Dialog>
  </div>
  );
}
