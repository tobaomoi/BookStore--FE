import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavHashLink } from "react-router-hash-link";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
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
  const { totalPrice } = props;
  const [userInformation, setUserInformation] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
  });

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
<<<<<<< HEAD
    } else{
      setIsLogin(true)
    } 
  };
  const renderModalCheckout = () => {
    if(isLogin === true){
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
            <h2 id="transition-modal-title">Đăng nhập rồi nè</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
      )
    }
    else{
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
=======
    } else {
      setIsLogin(true)
    }
  };
  const renderModalCheckout = () => {
    if (isLogin === true) {
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
              <h2 id="transition-modal-title">Đăng nhập rồi nè</h2>
              <p id="transition-modal-description">react-transition-group animates me.</p>
            </div>
          </Fade>
        </Modal>
      )
    }
    else {
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
>>>>>>> ab77db8 (update)
      )
    }
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
<<<<<<< HEAD
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Chủ đề</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul className="book__categories">
              <li className="book__categories-link">
                <NavHashLink smooth to="/#">
                  Giáo dục
                </NavHashLink>
              </li>
              <li className="book__categories-link">
                <NavHashLink smooth to="/#">
                  Thể thao
                </NavHashLink>
              </li>
              <li className="book__categories-link">
                <NavHashLink smooth to="/#">
                  Kinh doanh
                </NavHashLink>
              </li>
              <li className="book__categories-link">
                <NavHashLink smooth to="/#">
                  Lãng mạn
                </NavHashLink>
              </li>
              <li className="book__categories-link">
                <NavHashLink smooth to="/#">
                  Tiền điện tử
                </NavHashLink>
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Thông tin cá nhân</Typography>
=======
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> <b>Thông tin cá nhân</b> </Typography>
>>>>>>> ab77db8 (update)
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <table>
              <tr className="cart__information">
                <td>
<<<<<<< HEAD
                  <label htmlFor="name">Họ tên :</label>
=======
                  <label htmlFor="name"> <b> Họ tên :</b></label>
>>>>>>> ab77db8 (update)
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
              <tr className="cart__information">
                <td>
<<<<<<< HEAD
                  <label htmlFor="phoneNumber">Số điện thoại :</label>
=======
                  <label htmlFor="phoneNumber"> <b>Số điện thoại :</b> </label>
>>>>>>> ab77db8 (update)
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
              <tr className="cart__information">
                <td>
<<<<<<< HEAD
                  <label htmlFor="address">Địa chỉ :</label>
=======
                  <label htmlFor="address"> <b>Địa chỉ :</b> </label>
>>>>>>> ab77db8 (update)
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
              <tr className="cart__information">
                <td>
<<<<<<< HEAD
                  <label htmlFor="city">Thành phố :</label>
=======
                  <label htmlFor="city"> <b>Thành phố :</b> </label>
>>>>>>> ab77db8 (update)
                </td>
                <td>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Hồ Chí Minh"
                  />
                </td>
              </tr>
            </table>
          </Typography>
        </AccordionDetails>
      </Accordion>
<<<<<<< HEAD
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Mã giảm giá</Typography>
        </AccordionSummary>
      </Accordion>
      <div className="totalPrice">Tổng cộng: {totalPrice}</div>
      <div className="payment">
        <button type="button" onClick={handleCheckout}>
          Thanh toán
        </button>
        {renderModalCheckout()}
=======
      <div className="block-total-cart">
        <div className="totalPrice">
          <div className="totalPrice__left">Thành tiền</div>
          <div className="totalPrice__right">
            <span>{totalPrice} đ</span> </div>
        </div>
        <hr />
        <div className="payment">
          <div>
            <button className="btn-payment" type="button" onClick={handleCheckout}>
              THANH TOÁN
            </button>
          </div>
          {renderModalCheckout()}
        </div>
>>>>>>> ab77db8 (update)
      </div>
    </div>
  );
}

export default Payment;
