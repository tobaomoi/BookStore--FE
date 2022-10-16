import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookItem from "../BookItem";

function SlickCarousel(props) {
  const slickCarouselOptions = {
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderAllCarouselBooks = () => {
    const { allSlickCarouselBooks } = props;
    const responseData = allSlickCarouselBooks.map((book) => ({
      ...book, quantity: 1
    }));
    return responseData.map((book,i) => {
      return <BookItem key={i} book={book} />;
    });
  };
  return (
    <div className="slick__carousel">
      <header>
        <h2
          id={
            props.bookType === "Sách nổi bật" ? "feature_books" : "new__release"
          }
          className={props.bookType}
        >
          {props.bookType}
        </h2>
      </header>
      <ul className="list-unstyled">
        <Slider {...slickCarouselOptions}>{renderAllCarouselBooks()}</Slider>
      </ul>
    </div>
  );

}

export default SlickCarousel;
