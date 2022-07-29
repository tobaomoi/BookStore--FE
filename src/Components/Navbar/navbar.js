import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import LoginForm from "./LoginForm";
import JWT from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import SearchBar from "../SearchBar";
import callApi from "../../api";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const accessToken = window.localStorage.getItem("accessToken");
  const [userInformation, setUserInformation] = useState({});
  const [allBooks, setAllBooks] = useState([])
  const [active, setActive] = useState(false)
  const deleteCart = () => {
    const action = deleteCart();
    dispatch(action);
  };
  const addActiveClass = (e) => {
    const clicked = e.target.id;
    if (active === clicked) {
      setActive('');
    } else {
      setActive(clicked)
    }
    // setActive(true);
    console.log('alo',active);
  }
  const handleUserLogOut = () => {
    window.localStorage.clear();
    window.location.href = "https://hieusachcuanhat.vercel.app";
    deleteCart();
  };

  const getAllBooks = () => {
    callApi.get("/books/getAllBook").then((result) => {
      setAllBooks(result.data);
    })
  }
  const isUserLoggedIn = () => {
    if (!accessToken) {
      return (
        <nav className="header__topbar container-fluid px-3 px-md-5">
          <div className="header__topbar-left">
            <a className="phoneNumber" href="tel: +123458">0917788048</a> | tiemsachcuatui@gmail.com
          </div>
          <div className="header__topbar-right">
            <ul>
              <li className="header__topbar-item">
                <a href="https://hieusachcuanhat.vercel.app/cart">
                  <ShoppingCartRoundedIcon
                    className="cart"
                    fontSize="inherit"
                    style={{ fontSize: "30px" }}
                  />
                  <span className="numberCart">{cart.length}</span>
                </a>
              </li>

              <li className="header__topbar-item">
                <LoginForm />
              </li>
            </ul>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="header__topbar container-fluid px-3 px-md-5">
          <div className="header__topbar-left">
            <a className="phoneNumber" href="tel: +123458">0917788048</a> | tiemsachcuatui@gmail.com
          </div>
          <div className="header__topbar-right">
            <ul>
              <li className="header__topbar-item">
                <a href="http://localhost:3000/cart">
                  <ShoppingCartRoundedIcon
                    className="cart"
                    fontSize="inherit"
                    style={{ fontSize: "30px" }}
                  />
                  <span className="numberCart">{cart.length}</span>
                </a>
              </li>

              <li className="header__topbar-item">
                <div className="header__topbar-itemName">
                  {userInformation.given_name}
                </div>

              </li>
              <li className="header__topbar-item">
                <button className="header__topbar-itemButton" onClick={() => handleUserLogOut()}>ĐĂNG XUẤT</button>{" "}
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  };
  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    JWT.verify(
      JSON.parse(accessToken),
      "MY_BIG_SECRET_KEY",
      (err, decodedToken) => {
        if (!err) {
          console.log(decodedToken);
          setUserInformation(decodedToken);
          console.log("user", userInformation);
        }
      }
    );
    getAllBooks();
    console.log(allBooks);
  }, []);
  return (
    <div className="header ">
      {isUserLoggedIn()}
      <nav className="header__navbar container-fluid  px-3 px-md-5 ">
       
        <div className="header__navbar-logo">
          <NavHashLink smooth to="/">
            <img
              className="logo"
              src="https://i.pinimg.com/originals/70/bd/63/70bd630505578fffc4c873001f89a9e1.jpg"
              alt="HieuSachCuaNhat"
            />
          </NavHashLink>
        </div>
        <input type="checkbox" hidden className="header__navbar-check" id="check" />
        <label htmlFor="check">
          <MenuIcon className="check-btn" />
        </label>
        <label htmlFor="check"  className="header__navbar-overplay"></label>
        <div className="header__navbar-list">
         <label htmlFor="check" className="header__navbar-close"><CloseIcon /></label> 
          <ul>
            <li className="header__navbar-item">
              <NavHashLink className={`header__navbar-hashLink ${active === 'homepage'? 'active' : ''}`} smooth to="/" id="homepage" onClick={(e) => addActiveClass(e)} >
                Trang chủ
              </NavHashLink>
            </li>
            <li className="header__navbar-item">
              <NavHashLink className={`header__navbar-hashLink ${active === "intro" ? 'active' : ''}`}  smooth to="/#" id="intro" onClick={(e) => addActiveClass(e)}>
                Giới thiệu
              </NavHashLink>
            </li>
            <li className="header__navbar-item">
              <NavHashLink
                className={`header__navbar-hashLink ${active === "allBook" ? 'active' : ''}`} 
                smooth
                to="/allBook?page=1&category=all"
                id="allBook"
                onClick={(e) => addActiveClass(e)}
              >
                Sách
              </NavHashLink>
            </li>
            <li className="header__navbar-item">
              <NavHashLink className={`header__navbar-hashLink ${active === "other" ? 'active' : ''}`} smooth to="/#" id="other" onClick={(e) => addActiveClass(e)}>
                Khác
              </NavHashLink>
            </li>
            <div className="header__topbar-rightMobile">
            <ul>
              <li className="header__topbar-item">
                <a href="https://hieusachcuanhat.vercel.app/cart">
                  GIỎ HÀNG
                  <ShoppingCartRoundedIcon
                    className="cart"
                    fontSize="inherit"
                    style={{ fontSize: "30px" }}
                  />
                  <span className="numberCart">{cart.length}</span>
                </a>
              </li>
            
              <li className="header__topbar-item">
                <LoginForm />
              </li>
            </ul>
          </div>
          </ul>
        </div>
        <SearchBar  placeholder="Nhập tên quyển sách..." data={allBooks} />
      </nav>
    </div>
  );
}
<script></script>

export default Navbar;
