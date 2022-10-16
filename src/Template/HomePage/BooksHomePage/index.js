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
  FcReading
} from "react-icons/fc";
import { addCart } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";
function BooksHomePage() {
  const [homeData, setHomeData] = useState({
    highLightBooks: [],
    latestBooks: [],
  });

  const [horrorBooks, setHorrorBooks] = useState([]);
  const [mainHorrorBookInformation, setMainHorrorBookInformation] = useState(

  );
  const dispatch = useDispatch();

  const addToCart = (e, book) => {
    e.preventDefault();
    const action = addCart(book);
    dispatch(action);
  }

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

  const getHorrorBooks = () => {
    callApi
      .get("/books/getBookByPage?page=0&category=Kinh di").then((result) => {
        setHorrorBooks(result.data.data)
      });
  };
  const getMainHorrorBook = () => {
    callApi.get("/books/getBook/63484524d956eb5c2ece5559").then((result) => {
      const infoBook = result.data;
      setMainHorrorBookInformation({ ...infoBook, quantity: 1 });
    })
  }
  const listMainHorrorBook = () => {
    if (mainHorrorBookInformation) {
      return (
        <div key={mainHorrorBookInformation.id}>
          <div className="imgContainer-left">
            <div className="img">
              <a href="/book/6346d10e1b14e67febd16779">
                <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_79353.jpg" alt="horrorBook" />
              </a>
            </div>
            <div className="quick-add">
              <form onSubmit={(event) => addToCart(event, mainHorrorBookInformation)}>
                <button type="submit">THÊM VÀO GIỎ</button>
              </form>
            </div>
          </div>
          <div className="bookName">
            {mainHorrorBookInformation.bookName}
          </div>
          <div className="author">
            {mainHorrorBookInformation.author}
          </div>
          <div className="description">
            {mainHorrorBookInformation.description}
          </div>
        </div>
      )
    }
  }

  const listHorrorBooks = () => {
    if (horrorBooks.length > 0 && horrorBooks) {
      const responseData = horrorBooks.map((book) => ({ ...book, quantity: 1 }));
      return responseData.map((book) => {
        return (
          <>
            <div key={book.id} className="contentBook">
              <div className="imgContainer-right">
                <div className="img">
                  <a href={`book/${book.id}`}>
                    <img src={book.thumbnail[0]} alt="thumbnail" />
                  </a>
                </div>
                <div className="quick-add">
                  <form onSubmit={(event) => addToCart(event, book)}>
                    <button type="submit">THÊM</button>
                  </form>
                </div>
              </div>
              <div className="bookName">
                {book.bookName}
              </div>
              <div className="author">
                {book.author}
              </div>
            </div>
          </>
        )
      })
    }
  }

  useEffect(() => {
    getAllHighLightBook();
    getHorrorBooks();
    getMainHorrorBook();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <header>
            <h2 className="message">
              <span className="subMessage">TÌM CUỐN SÁCH PHÙ HỢP VỚI BẠN NHẤT TẠI TIỆM SÁCH CỦA TUI</span> Hơn 5 triệu quyển sách được xuất bản sẵn sàng vận chuyển! Cửa hàng chúng tôi đảm bảo đem đến trải nghiệm tốt nhất cho bạn! </h2>
          </header>
          <ul className="book-list__category  list-unstyled my-0 row">
            <a href="https://hieusachcuanhat.vercel.app/allBook?page=1&category=Giao%20duc" className="book-category col">
              <li>
                <div className="book-category__inner education px-5 py-4">
                  <div className="book-category__icon">
                    <FcGraduationCap />
                  </div>
                  <div className="book-category__body">
                    <h3 className="text-category">Giáo dục</h3>
                    <p className="see-more">Xem thêm</p>
                  </div>
                </div>
              </li>
            </a>

            <a href="https://hieusachcuanhat.vercel.app/allBook?page=1&category=Tham%20hiem" className="book-category col">
              <li>
                <div className="book-category__inner sport px-5 py-4">
                  <div className="book-category__icon">
                    <FcSportsMode />
                  </div>
                  <div className="book-category__body">
                    <h3 className="text-category">Thám hiểm</h3>
                    <p className="see-more" >Xem thêm</p>
                  </div>
                </div>
              </li>
            </a>

            <a href="https://hieusachcuanhat.vercel.app/allBook?page=1&category=Kinh%20te" className="book-category col">
              <li>
                <div className="book-category__inner business px-5 py-4">
                  <div className="book-category__icon">
                    <FcBusinessman />
                  </div>
                  <div className="book-category__body">
                    <h3 className="text-category">Kinh tế</h3>
                    <p className="see-more" >Xem thêm</p>
                  </div>
                </div>
              </li>
            </a>

            <a href="https://hieusachcuanhat.vercel.app/allBook?page=1&category=Tieu%20thuyet" className="book-category col">
              <li >
                <div className="book-category__inner romance px-5 py-4">
                  <div className="book-category__icon">
                  <FcReading/>
                  </div>
                  <div className="book-category__body">
                    <h3 className="text-category">Tiểu thuyết</h3>
                    <p className="see-more" >Xem thêm</p>
                  </div>
                </div>
              </li>
            </a>
            <a href="https://hieusachcuanhat.vercel.app/allBook?page=1&category=Tam%20ly" className="book-category col">
              <li >
                <div className="book-category__inner crypto px-5 py-4">
                  <div className="book-category__icon">
                  <FcLike />
                  </div>
                  <div className="book-category__body">
                    <h3 className="text-category">Tâm lý</h3>
                    <p className="see-more" >Xem thêm</p>
                  </div>
                </div>
              </li>
            </a>

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
      <div className="saleBanner">
        <a href="#">
          <img className="saleBanner-img" src="https://nxbphunu.com.vn/wp-content/uploads/2018/07/banner_NXBPHUNU.jpg" alt="sale-banner" />
        </a>
      </div>

      <section>
        <div className="container horrorBooksBox">
          <h2 id="topHorrorBooks">Truyện kinh dị hay nhất 2022</h2>
          <div className="horrorBooks">
            <div className="horrorBooks__left-content">
              {listMainHorrorBook()}
            </div>
            <div className="horrorBooks__right-content">
              {listHorrorBooks()}
            </div>
          </div>
        </div>
      </section>

      <div className="saleBanner">
        <a href="#">
          <img className="saleBanner-img" src="https://nxbphunu.com.vn/wp-content/uploads/2020/02/banner-hoi-sach.jpg" alt="sale-banner" />
        </a>
      </div>
      <div className="libraryBox">
        <h2 id="libraryTitle" className="text-center">Thư viện</h2>
        <div className="image-box">
          <div className="image"><img src="https://cdn.pixabay.com/photo/2021/01/27/07/19/baby-5953965__340.jpg" alt="" /></div>
          <div className="image"><img src="https://cdn.pixabay.com/photo/2016/05/28/07/05/book-1421097__340.jpg" alt="" /></div>
          <div className="image"><img src="https://cdn.pixabay.com/photo/2018/05/13/14/52/boys-3396713__340.jpg" alt="" /></div>
          <div className="image"><img src="https://cdn.pixabay.com/photo/2016/01/31/15/18/book-1171564__340.jpg" alt="" /></div>
        </div>
      </div>
    </>
  );
}

export default BooksHomePage;
