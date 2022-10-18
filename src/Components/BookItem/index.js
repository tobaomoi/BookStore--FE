import React from "react";
import { NavHashLink } from "react-router-hash-link";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { addCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


 function BookItem(props) {
  const { book,keyBook } = props;
  const dispatch = useDispatch();
  const addToCart = (e,bookInformation) => {
    e.preventDefault();
    const action = addCart(bookInformation);
    dispatch(action); 
  };
  return (
    // eslint-disable-next-line no-template-curly-in-string
    <li key={keyBook} className="book__item p-3 p-md-4d875">
      <div className="item__container">
        <NavHashLink smooth to={`/book/${book.id}/#`}>
          <div className="book__image">
            <img className="img-thumbnail" src={book.thumbnail[0]} alt="img" />
          </div>
        </NavHashLink>
        <div className="short__information">
          <a className="book__category" href={`/book/${book.id}/#`}>{book.category.replace("All-", " ")}</a>
          <div className="book__name">  {book.bookName}</div>
          <div className="book__author"> {book.author}</div>
          <div className="book__price"> {book.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} đ</div>
        </div>       
      </div>
      <div className="item__hover d-flex ">
          <form onSubmit={(event) => addToCart(event,book)}>
            <button type="submit" className="addShoppingCartText">Thêm vào giỏ</button>
            <button type="submit" className="addShoppingCartIcon"><AddShoppingCartIcon /></button>
          </form>
          <FavoriteBorderIcon className="icon-heart" />
        </div>
    </li>
  );
}

export default BookItem;
