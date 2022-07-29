/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import SlickCarousel from "../../../Components/SlickCarousel";
import callApi from "../../../api";
import { HomeWrapper } from "./homeWrapper";
import {
  FcGraduationCap,
  FcSportsMode,
  FcBusinessman,
  FcLike,
  FcCurrencyExchange,
} from "react-icons/fc";
import { FiChevronsRight} from "react-icons/fi";
function BooksHomePage() {
  const [homeData, setHomeData] = useState({
    highLightBooks: [],
    latestBooks: [],
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAllHighLightBook = () => {
    callApi.get("/books/getHighLightBooks").then((result) => {
      getAllLatestBooks(result.data);
    });
  };

  const getAllLatestBooks = (AllHighLightBook) => {
    callApi.get("/books/getLatestBooks").then((result) => {
      setHomeData({
        ...homeData,
        highLightBooks: AllHighLightBook,
        latestBooks: result.data,
      });
    });
  };

  useEffect(() => {
    getAllHighLightBook();
  },[]);

  return (
    <>
      <section>
        <div className="container">
          <header className="d-flex justify-content-between align-items-center">
            <h2>Chủ đề nổi bật</h2>
            <a className="see-all" href="https://hieusachcuanhat.vercel.app/allBook?category=all">Tất cả <FiChevronsRight/></a>
          </header>
          <ul className="book-list__category  list-unstyled my-0 row">
            <li className="book-category col">
              <div className="book-category__inner education px-5 py-4">
                <div className="book-category__icon">
                  <FcGraduationCap />
                </div>
                <div className="book-category__body">
                  <h3 className="text-category">Giáo dục</h3>
                  <a className="see-more" href="https://hieusachcuanhat.vercel.app/allBook?page=1&category=Giao%20duc">Xem thêm</a>
                </div>
              </div>
            </li>
            <li className="book-category col">
              <div className="book-category__inner sport px-5 py-4">
                <div className="book-category__icon">
                  <FcSportsMode />
                </div>
                <div className="book-category__body">
                  <h3 className="text-category">Thể thao</h3>
                  <a className="see-more" href="https://hieusachcuanhat.vercel.app/allBook?page=1&category=The%20thao">Xem thêm</a>
                </div>
              </div>
            </li>
            <li className="book-category col">
              <div className="book-category__inner business px-5 py-4">
                <div className="book-category__icon">
                  <FcBusinessman />
                </div>
                <div className="book-category__body">
                  <h3 className="text-category">Kinh doanh</h3>
                  <a className="see-more" href="https://hieusachcuanhat.vercel.app/allBook?page=1&category=Kinh%20doanh">Xem thêm</a>
                </div>
              </div>
            </li>
            <li className="book-category col">
              <div className="book-category__inner romance px-5 py-4">
                <div className="book-category__icon">
                  <FcLike />
                </div>
                <div className="book-category__body">
                  <h3 className="text-category">Lãng mạn</h3>
                  <a className="see-more" href="https://hieusachcuanhat.vercel.app/allBook?page=1&category=Lang%20man">Xem thêm</a>
                </div>
              </div>
            </li>
            <li className="book-category col">
              <div className="book-category__inner crypto px-5 py-4">
                <div className="book-category__icon">
                  <FcCurrencyExchange />
                </div>
                <div className="book-category__body">
                  <h3 className="text-category">Tiền điện tử</h3>
                  <a className="see-more" href="https://hieusachcuanhat.vercel.app/allBook?page=1&category=Tien%20dien%20tu">Xem thêm</a>
                </div>  
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container ">
          <HomeWrapper>
            <SlickCarousel
              allSlickCarouselBooks={homeData.latestBooks}
              bookType="Mới ra mắt"
            />
          </HomeWrapper>
        </div>
      </section>
      <section>
        <div className="container">
          <HomeWrapper>
            <SlickCarousel
              allSlickCarouselBooks={homeData.highLightBooks}
              bookType="Sách nổi bật"
            />
          </HomeWrapper>
        </div>
      </section>
    </>
  );
}

export default BooksHomePage;
