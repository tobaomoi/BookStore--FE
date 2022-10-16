import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useDispatch } from "react-redux";
import { deleteCart } from "../../redux/cartSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Payment(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState();
  let { totalPrice } = props;
  const max = 9999999;
  const min = 1000000;
  const oderCode = Math.trunc(Math.random() * (max - min) + min);
  const [userInformation, setUserInformation] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    orderCode: oderCode
  });
  const dispatch = useDispatch();
  totalPrice = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  const handleClose = () => {
    setOpen(false);
  };

  const handleGetInformation = (event) => {
    const { name, value } = event.target;
    setUserInformation({ ...userInformation, [name]: value });
    console.log(userInformation);
  };

  const handleCheckout = () => {
    const accessToken = window.localStorage.getItem("accessToken");
    setOpen(true);
    if (!accessToken) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
      if (document.getElementById('name').value === "" || document.getElementById('phoneNumber').value === "" || document.getElementById('address').value === "" || document.getElementById('city').value === "") {
        setOpen(false);
        toast.error('Vui lòng nhập thông tin cá nhân!', {
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
    }
  };

  const renderModalCheckout = () => {
    if (isLogin === false) {
      return (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 className="text-center" id="transition-modal-title">Thông báo</h2>

              <p id="transition-modal-description" className="mx-auto">Vui lòng đăng nhập để thực hiện chức năng này !!!</p>
            </div>
          </Fade>
        </Modal>
      )
    }
    const deleteListOfCart = (e) => {
      e.preventDefault();
      toast.success('Xác nhận thành công!',{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        dispatch(deleteCart());
      }, 2000);
      
    }
    if (isLogin === true) {
      if (document.getElementById('name').value !== "" && document.getElementById('phoneNumber').value !== "" && document.getElementById('address').value !== "" && document.getElementById('city').value !== "") {
        return (
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper} id="modal-checkout">
                <div className="stickSuccessful">
                  <CheckCircleIcon style={{ fontSize: "50px", color: "green" }}></CheckCircleIcon>
                </div>
                <h1 id="transition-modal-title">Đặt hàng thành công</h1>
                <p>Bạn đã đặt hàng thành công đơn hàng mã <span className="checkout-code">{userInformation.orderCode}</span></p>
                <div>
                  <h5 className="header-detailCheckoutInformation">Chi tiết đơn hàng: </h5>
                  <div className="checkout__information">
                    <p className="checkout__information-main">Người nhận: <span className="checkout__information-detail">{userInformation.name}</span>  </p>
                    <p className="checkout__information-main">SĐT: <span className="checkout__information-detail">{userInformation.phoneNumber}</span> </p>
                    <p className="checkout__information-main">Địa chỉ: <span className="checkout__information-detail">{userInformation.address}</span></p>
                    <p className="checkout__information-main">Tổng giá: <span className="checkout__information-detail">{totalPrice}</span></p>
                    <div className="cnfm">
                    <button className="cnfm-button" onClick={(e)=> deleteListOfCart(e)}>XÁC NHẬN</button>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </Modal>
        )
      }
    }

  }
  return (
    <div>
      <div className="personal__information">
        <div className="personal__information-header"><b>Thông tin cá nhân</b></div>
        <table>
          <tr className="personal__information-body">
            <td>
              <label htmlFor="name"> <b> Họ tên :</b></label>
            </td>
            <td>
              <input
                type="text"
                onChange={handleGetInformation}
                id="name"
                name="name"
                placeholder="John More Doe"
              />
            </td>
          </tr>
          <tr className="personal__information-body">
            <td>
              <label htmlFor="phoneNumber"> <b>Số điện thoại :</b> </label>
            </td>
            <td>
              <input
                type="text"
                onChange={handleGetInformation}
                id="phoneNumber"
                name="phoneNumber"
                placeholder="John More Doe"
              />
            </td>
          </tr>
          <tr className="personal__information-body">
            <td>
              <label htmlFor="address"> <b>Địa chỉ :</b> </label>
            </td>
            <td>
              <input
                type="text"
                onChange={handleGetInformation}
                id="address"
                name="address"
                placeholder="566 CMT8"
              />
            </td>
          </tr>
          <tr className="personal__information-body">
            <td>
              <label htmlFor="city"> <b>Thành phố :</b> </label>
            </td>
            <td>
              <input
                onChange={handleGetInformation}
                type="text"
                id="city"
                name="city"
                placeholder="Hồ Chí Minh"
              />
            </td>
          </tr>
        </table>
      </div>
      <div className="block-total-cart">
        <div className="totalPrice">
          <div className="totalPrice__left">Thành tiền</div>
          <div className="totalPrice__right">
            <span>{totalPrice}</span> </div>
        </div>
        <hr />
        <div className="payment">
          <div>
            <button className="btn-payment" type="button" onClick={handleCheckout}>
              THANH TOÁN
            </button>
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
          {renderModalCheckout()}
        </div>
      </div>
    </div>
  );
}

export default Payment;
