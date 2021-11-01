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
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderAllCarouselBooks = () => {
    const { allSlickCarouselBooks } = props;
    return allSlickCarouselBooks.map((book, index) => {
      return <BookItem key={index} book={book} />;
    });
  };
  return (
    <div className="slick__carousel">
      <header>
        <h2
          id={
            props.bookType === "Sách nổi bật" ? "feature_books" : "new__release"
          }
          className="book__type"
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
