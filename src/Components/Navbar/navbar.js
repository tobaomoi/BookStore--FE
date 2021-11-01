import React, { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import LoginForm from "./LoginForm";
import JWT from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import SearchBar from "../SearchBar";
import callApi from "../../api";
function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const accessToken = window.localStorage.getItem("accessToken");
  const [userInformation, setUserInformation] = useState({});
  const [allBooks,setAllBooks] = useState([])
  const deleteCart = () => {
    const action = deleteCart();
    dispatch(action);
  };

  const handleUserLogOut = () => {
    window.localStorage.clear();
    window.location.href = "http://localhost:3000/";
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
          <div className="header__topbar-phoneNumber">
            <a href="tel: +123458">123458</a>
          </div>
          <div className="header__topbar-list">
            <ul>
              <li className="header__topbar-item">
                <a href="http://localhost:3000/cart">
                  <ShoppingCartRoundedIcon
                    className="cart"
                    fontSize="inherit"
                    style={{ fontSize: "35px" }}
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
          <div className="header__topbar-phoneNumber">
            <a href="tel: +123458">123458</a>
          </div>
          <div className="header__topbar-list">
            <ul>
              <li className="header__topbar-item">
                <a href="http://localhost:3000/cart">
                  <ShoppingCartRoundedIcon
                    className="cart"
                    fontSize="inherit"
                    style={{ fontSize: "35px" }}
                  />
                  <span className="numberCart">{cart.length}</span>
                </a>
              </li>

              <li className="header__topbar-item">
                {userInformation.given_name}
              </li>
              <li className="header__topbar-item">
                <button onClick={() => handleUserLogOut()}>Đăng xuất</button>{" "}
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
      <nav className="header__navbar container-fluid  px-3 px-md-5   ">
        <div className="header__navbar-logo">
          <NavHashLink smooth to="/#">
            <img
              className="logo"
              src="https://iweb.tatthanh.com.vn/pic/3/blog/images/logo-sach(63).jpg"
              alt="HieuSachCuaNhat"
            />
          </NavHashLink>
        </div>
        <div className="header__navbar-list">
          <ul>
            <li className="header__navbar-item">
              <NavHashLink className="header__navbar-hashLink" smooth to="/#">
                Trang chủ
              </NavHashLink>
            </li>
            <li className="header__navbar-item">
              <NavHashLink className="header__navbar-hashLink" smooth to="/abc">
                Giới thiệu
              </NavHashLink>
            </li>
            <li className="header__navbar-item">
              <NavHashLink
                className="header__navbar-hashLink  dropdown-toggle"
                smooth
                to="/#"
              >
                Sách
              </NavHashLink>
            </li>
            <li className="header__navbar-item">
              <NavHashLink className="header__navbar-hashLink" smooth to="/#">
                Blog
              </NavHashLink>
            </li>
            <li className="header__navbar-item">
              <NavHashLink className="header__navbar-hashLink" smooth to="/#">
                Khác
              </NavHashLink>
            </li>
          </ul>
        </div>
        <SearchBar placeholder="Nhập tên quyển sách..." data={allBooks}/>
      </nav>
    </div>
  );
}

export default Navbar;
