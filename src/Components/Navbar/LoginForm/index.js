import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import callApi from "../../../api";

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

export default function LoginForm() {

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [signUpData, setSignUpData] = useState({
    email: "",
    userName: "",
    passWord: "",
    confirmPassWord: "",
    phoneNumber: "",
  });



  const handleGetLoginData = (event) => {
  
    const { name, value } = event.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    if (document.getElementById('email').value === "" || document.getElementById('password').value === "") {
      toast.warn('Nh???p ?????y ????? email v?? m???t kh???u!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }
    else {
      callApi
        .post("/users/login", signInData)
        .then((result) => {
          console.log(result);
          
          window.localStorage.setItem(
            "accessToken",
            JSON.stringify(result.data.user.value.token)
          );
          toast.success('????ng nh???p th??nh c??ng!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            setOpen(false);
            window.location.href = "https://hieusachcuanhat.vercel.app";
          }, 1000);
        })
        .catch((err) => {
          toast.error('Sai email ho???c m???t kh???u!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log(err);
        });
    }
  };

  const handleGetSignUpData = (event) => {
   
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleUserSignUp = (event) => {
    event.preventDefault();
    if (document.getElementById('Email').value === "" || document.getElementById("userName").value === "" || document.getElementById("passWord").value === "" || document.getElementById("confirmPassWord").value === "" || document.getElementById("phoneNumber").value === "") {
      toast.warn('Nh???p ?????y ????? d??? li???u!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("hello");
      return false;
    } else {
      callApi
        .post("/users/signUp", signUpData)
        .then((result) => {
          toast.success('????ng k?? th??nh c??ng!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => { setOpen(false) }, 2000);
         
          console.log("data", result.data);
        })
        .catch((err) => {
          
          toast.error('????ng k?? th???t b???i', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }

  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [btnToRight, setBtnToRight] = useState(true)
  const [colorBlockBtn, setColorBlockBtn] = useState("0px")
  const toRight = () => {
    setBtnToRight(false);
    setColorBlockBtn("130px")
  }
  const toLeft = () => {
    setBtnToRight(true);
    setColorBlockBtn("0px")
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        ????ng nh???p
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          className="mx-auto"
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <div className="button-box">
            <div className="blockColorBtn" style={{ left: colorBlockBtn }}></div>
            <label className="toggle-btn" onClick={toLeft}>

              <b>????ng nh???p</b>

            </label>
            <label className="toggle-btn" onClick={toRight} >

              <b >????ng k??</b>
            </label>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="form-container container">

            <form
              id="signIn"
              onSubmit={handleUserSignIn}
              className={`${btnToRight ? "sign_In_Form" : "sign_In_Form_Hidden"}`}
              autoComplete="off"
            >
              <div className="input-container ">
                <input
                  onChange={handleGetLoginData}
                  id="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  type="text"
                />

                <input
                  onChange={handleGetLoginData}
                  id="password"
                  className="input"
                  name="password"
                  placeholder="M???t kh???u"
                  type="password"
                />
              </div>
              <label>
                <input style={{ marginRight: "10px" }} type="checkbox" name="remember" />
                L??u m???t kh???u
              </label>
              <div className="forget__password">
                <a className="forget__password-main" href="#">Qu??n m???t kh???u?</a>
              </div>
              <button
                className="btn"
                type="submit"
                onClick={handleUserSignIn}
              >
                <b>????ng nh???p</b>
              </button>
            </form>
            <div className={`${btnToRight ? "registerNow" : "registerNow_Hidden"}`} >
              B???n ch??a ????ng k??? <button className="btn-registerNow" onClick={toRight} >????ng k?? ngay</button>
            </div>
            <form
              id="signUp"

              onSubmit={handleUserSignUp}
              className={`${btnToRight ? "sign_Up_Form_Hidden" : "sign_Up_Form"}`}
              autoComplete="off"
            >
              <div className="input-container">

                <input
                  onChange={handleGetSignUpData}
                  id="Email"
                  className="input"
                  name="Email"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className="input-container">

                <input
                  onChange={handleGetSignUpData}
                  id="userName"
                  className="input"
                  name="userName"
                  placeholder="T??n hi???n th???"
                  type="text"
                />
              </div>
              <div className="input-container">
                <input
                  onChange={handleGetSignUpData}
                  id="passWord"
                  className="input"
                  name="passWord"
                  placeholder="M???t kh???u"
                  type="password"
                />
              </div>
              <div className="input-container">
                <input
                  onChange={handleGetSignUpData}
                  id="confirmPassWord"
                  className="input"
                  name="confirmPassWord"
                  placeholder="X??c nh???n m???t kh???u"
                  type="password"
                />
              </div>
              <div className="input-container">
                <input
                  onChange={handleGetSignUpData}
                  id="phoneNumber"
                  className="input"
                  name="phoneNumber"
                  placeholder="S??? ??i???n tho???i"
                  type="text"
                />
              </div>
              <button className="btn" type="submit" onClick={handleUserSignUp}>
                <b>????ng k??</b>
              </button>
            </form>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
