import React from "react";
import Carousel from "./Carousel";
import BooksHomePage from "./BooksHomePage";
function HomePage(props) {
  return (
    <div className="HomePage">
        <Carousel />
        <BooksHomePage />
    </div>
  );
}

export default HomePage;
