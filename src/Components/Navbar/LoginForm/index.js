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
  const [message, setMessage] = useState("");
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
    setMessage("");
    const { name, value } = event.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    if (document.getElementById('email').value === "" || document.getElementById('password').value === "") {
      toast.warn('Nhập đầy đủ email và mật khẩu!', {
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
          setMessage(result.data.message);
          window.localStorage.setItem(
            "accessToken",
            JSON.stringify(result.data.user.value.token)
          );
          toast.success('Đăng nhập thành công!', {
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
            window.location.href = "http://localhost:3000/";
          }, 1000);
        })
        .catch((err) => {
          toast.error('Sai email hoặc mật khẩu!', {
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
    setMessage("");
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleUserSignUp = (event) => {
    event.preventDefault();
    if (document.getElementById('Email').value === "" || document.getElementById("userName").value === "" || document.getElementById("passWord").value === "" || document.getElementById("confirmPassWord").value === "" || document.getElementById("phoneNumber").value === "") {
      toast.warn('Nhập đầy đủ dữ liệu!', {
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
          toast.success('Đăng ký thành công!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {setOpen(false)}, 2000);
          setMessage(result.data.message);
          console.log("data", result.data);
        })
        .catch((err) => {
          setMessage(err.response.data.error);
          toast.error('Đăng ký thất bại', {
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

  const [btnLeft, setBtnLeft] = useState("0px");
  const [register, setRegister] = useState("650px");
  const [login, setLogin] = useState("150px");
  const loginBtn = () => {
    setBtnLeft("0px");
    setRegister("650px");
    setLogin("150px");
  }

  const registerBtn = () => {
    setBtnLeft("130px");
    setRegister("150px");
    setLogin("650px");
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        Đăng nhập
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
            <div id="btn1" style={{ left: btnLeft }}></div>
            <button type="button" className="toggle-btn" onClick={loginBtn} >
              Đăng nhập
            </button>
            <button type="button" className="toggle-btn" onClick={registerBtn}>
              Đăng ký
            </button>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className="form-container container">
            <form
              id="signIn"
              style={{ left: login }}
              onSubmit={handleUserSignIn}
              className="sign_In_Form"
              autoComplete="off"
            >
              <div className="input-container ">
                <label htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  onChange={handleGetLoginData}
                  id="email"
                  name="email"
                  placeholder="Please enter your email ..."
                  type="text"
                />

                <label htmlFor="password">
                  <b> Password</b>
                </label>
                <input
                  onChange={handleGetLoginData}
                  id="password"
                  name="password"
                  placeholder="Please enter your password ..."
                  type="password"
                />
              </div>
              <label>
                <input style={{ marginRight: "2px" }} type="checkbox" name="remember" />
                Lưu mật khẩu
              </label>
              <p id="notification">{message}</p>
              <button
                className="btn"
                type="submit"
                onClick={handleUserSignIn}
              >
                Đăng nhập
              </button>

            </form>
            <form
              id="signUp"
              style={{ left: register }}
              onSubmit={handleUserSignUp}
              className="sign_Up_Form"
              autoComplete="off"
            >
              <div className="input-container">
                <b>Email</b>
                <input
                  onChange={handleGetSignUpData}
                  id="Email"
                  name="Email"
                  placeholder="Please enter your email ..."
                  type="text"
                />
              </div>
              <div className="input-container">
                <b>UserName</b>
                <input
                  onChange={handleGetSignUpData}
                  id="userName"
                  name="userName"
                  placeholder="Please enter your name ..."
                  type="text"
                />
              </div>
              <div className="input-container">
                <b>Password</b>
                <input
                  onChange={handleGetSignUpData}
                  id="passWord"
                  name="passWord"
                  placeholder="Please enter your password ..."
                  type="password"
                />
              </div>
              <div className="input-container">
                <b>Confirm Password</b>
                <input
                  onChange={handleGetSignUpData}
                  id="confirmPassWord"
                  name="confirmPassWord"
                  placeholder="Please enter your confirm password ..."
                  type="password"
                />
              </div>
              <div className="input-container">
                <b>Phone Number</b>
                <input
                  onChange={handleGetSignUpData}
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Please enter your phone number ..."
                  type="text"
                />
              </div>
              <p id="notification">{message}</p>

              <button className="btn" type="submit" onClick={handleUserSignUp}>
                Sign up
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
