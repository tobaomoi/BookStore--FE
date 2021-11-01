import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, incrementCart, subtractCart } from "../../redux/cartSlice";
import Payment from "./payment";
import EmptyCart from "./emptyCart";
// import { CartContext } from '../../Context/CartContext'

function CartPage(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // const [totalPrice, setTotalPrice] = useState();
  console.log("List of Cart:", cart);
  const handleRemoveCart = (e, book) => {
    e.preventDefault();
    const removeCartId = book.bookId;
    const action = removeCart(removeCartId);
    dispatch(action);
  };
  const handleInscrement = (e, book) => {
    e.preventDefault();
    const bookId = book.bookId;
    const action = incrementCart(bookId);
    dispatch(action);
  };
  const handleDecrement = (e, book) => {
    e.preventDefault();
    const bookId = book.bookId;
    const action = subtractCart(bookId);
    dispatch(action);
  };
  const handleTotalPrice = () => {
    return cart.reduce((sum, i) => {
      sum += i.quantity * i.price;
      return sum;
    }, 0);
  };
 
  const renderCart = () => {
    if (cart && cart.length > 0) {
      handleTotalPrice();
      return cart.map((item, index) => {
        const { bookName, price, thumbnail, author, quantity } = item;
        return (
          <tr className="cart__item" key={index}>
            <td className="cart__item-name" title="Sản phẩm">
              <div className="d-flex align-items-center">
                <div className="cart__item-image">
                  <img src={thumbnail[0]} alt={bookName} />
                </div>
                <div className="cart__item-name">
                  <a href="#">{bookName}</a> <br />
                  <a href="#">{author}</a>
                </div>
              </div>
            </td>
            <td className="cart__item-price " title="Giá">
              {price}
            </td>
            <td className="cart__item-quantity">
              <button onClick={(event) => handleDecrement(event, item)}>
                -
              </button>
              {quantity}

              <button onClick={(event) => handleInscrement(event, item)}>
                +
              </button>
            </td>
            <td className="cart__item-totalPrice">{price * quantity}</td>
            <td className="cart__item-remove">
              <div key={index}>
                <button onClick={(event) => handleRemoveCart(event, item)}>
                  X
                </button>
              </div>
            </td>
          </tr>
        );
      });
    }
  };
  if(cart.length === 0){
    return <EmptyCart />
  }else return (
    <div className="container cart">
      <h1>Giỏ hàng: {cart.length} sản phẩm</h1>
      <div className="row">
        <div className="col-9">
          <table>
            <thead>
              <tr>
                <th className="book-name">Sản phẩm</th>
                <th className="book-price">Đơn giá</th>
                <th className="book-quantity">Số lượng</th>
                <th className="book-totalPrice">Tổng giá</th>
                <th className="book--remove"></th>
              </tr>
            </thead>
            <tbody>{renderCart()}</tbody>
          </table>
        </div>
        <div className="col-3">
          <Payment totalPrice={handleTotalPrice()}  />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
