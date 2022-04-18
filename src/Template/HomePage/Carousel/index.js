import React from "react";

function Carousel() {
  return (
    <section>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
<<<<<<< HEAD
            <img src="https://waves-lifestyle.com/wp-content/uploads/2021/04/BBW-Banner.jpg" className="d-block w-100" alt="..." />
=======
            <img src="https://media.baamboozle.com/uploads/images/14381/1620639865_121714.jpeg" className="d-block w-100" alt="..." />
>>>>>>> ab77db8 (update)
          </div>
          <div className="carousel-item">
            <img src="https://www.ubookstore.com/assets/images/Category/category-books-banner_1920x550_210401.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shondaland-novemberbooks-1604358983.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          tabIndex="0"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Carousel;
