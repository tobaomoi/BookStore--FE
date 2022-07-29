import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuBookIcon from '@material-ui/icons/MenuBook';
function Footer(props) {
  return (
    <div className="footer py-5 ">
      <div className="container">
        <div className="row footer__container">
          <div className="col-sm-12 col-md-6">
            <h1>Tiệm Sách Của Tui</h1>
            <MenuBookIcon className="footer-bookIcon"/>
          </div>
          <div className="col-md-4">
              <h6>Hỗ trợ khách hàng</h6>
              <ul className="footer-link">
                  <li>Quy định và hình thức thanh toán</li>
                  <li>Chính sách vận chuyển</li>
                  <li>Chính sách đổi - trả hàng</li>
                  <li>Câu hỏi thường gặp</li>
                  <li>Liên hệ</li>
              </ul>
          </div>
          <div className="col-md-2">
              <h6>Trang</h6>
              <ul className="footer-link">
                  <li><a href="https://hieusachcuanhat.vercel.app">Trang chủ</a> </li>
                  <li>Giới thiệu</li>
                  <li><a href={`https://hieusachcuanhat.vercel.app/allBook?page=1&category=all`}>Sản phẩm</a> </li>
                  <li><a href="https://hieusachcuanhat.vercel.app/cart">Giỏ hàng</a></li>
              </ul>
          </div>
        </div>
        <hr className="mx-auto" />
        <div className="row">
            <div className="col-md-9">Email: tiemsachcuatui@gmail.com</div>
            <div className="footer-icon col-md-3">
                <FacebookIcon className="footer-icon__facebook" />
                <InstagramIcon className="footer-icon__instagram" />
                <TwitterIcon className="footer-icon__twitter" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
