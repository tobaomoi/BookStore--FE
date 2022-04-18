import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { addCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
function BookItem(props) {
  const { book } = props;
  const dispatch = useDispatch();
  const [bookInformation, setBookInformation] = useState({
    bookId: book.id,
    bookName: book.bookName,
    category: book.category,
    price: book.price,
    description: book.description,
    author: book.author,
    thumbnail: book.thumbnail,
    quantity: 1,
  });
  const addToCart = (e) => {
    e.preventDefault();
    const action = addCart(bookInformation);
    console.log({ action });
    dispatch(action);
<<<<<<< HEAD
  
=======

>>>>>>> ab77db8 (update)
  };
  return (
    // eslint-disable-next-line no-template-curly-in-string
    <li className="book__item p-3 p-md-4d875">
      <div className="item__container">
        <NavHashLink smooth to={`/book/${book.id}/#`}>
          <div className="book__image">
            <img className="img-thumbnail" src={book.thumbnail[0]} alt="img" />
          </div>
        </NavHashLink>
        <div className="short__information">
<<<<<<< HEAD
          <a href="#">{book.category}</a>
          <div className="book__name">  {book.bookName}</div>
          <div className="book__author"> {book.author}</div>
          <div className="book__price">{book.price}</div>
=======
          <a href={`/book/${book.id}/#`}>{book.category}</a>
          <div className="book__name">  {book.bookName}</div>
          <div className="book__author"> {book.author}</div>
          <div className="book__price">{book.price} đ</div>
>>>>>>> ab77db8 (update)
        </div>
        <div className="item__hover d-flex justify-content-between">
          <form action="" onSubmit={(event) => addToCart(event)}>
            <button type="submit">Thêm vào giỏ</button>
          </form>
          <FavoriteBorderIcon className="icon-heart" />
        </div>
      </div>
    </li>
  );
}

export default BookItem;
