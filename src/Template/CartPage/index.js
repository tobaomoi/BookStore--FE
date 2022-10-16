import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, incrementCart, subtractCart, deleteCart } from "../../redux/cartSlice";
import Payment from "./payment";
import EmptyCart from "./emptyCart";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useEffect } from "react";

function CartPage(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleRemoveCart = (e, book) => {
    e.preventDefault();
    const removeCartId = book.id;
    const action = removeCart(removeCartId);
    dispatch(action);
  };
  const handleInscrement = (e, book) => {
    e.preventDefault();
    const bookId = book.id;
    const action = incrementCart(bookId);
    dispatch(action);
  };
  const handleDecrement = (e, book) => {
    e.preventDefault();
    const bookId = book.id;
    const action = subtractCart(bookId);
    dispatch(action);
  };
  const handleTotalPrice = () => {
    return cart.reduce((sum, i) => {
      sum += i.quantity * i.price;
      return sum;
    }, 0);
  };
  const removeAllCart = (e) => {
    e.preventDefault();
    dispatch(deleteCart());
  }
  useEffect(() => {
    // window.location.reload();
  },[cart.length])
  
  const renderCart = () => {
    if (cart && cart.length > 0) {
      handleTotalPrice();
      return cart.map((item, index) => {
        const { bookName, price, thumbnail, author, quantity, id } = item;
        return (
          <tr className="cart__item" key={index}>
            <td className="cart__item-name" title="Sản phẩm">
              <div className="d-flex align-items-center">
                <div className="cart__item-image">
                  <img src={thumbnail[0]} alt={bookName} />
                </div>
                <div className="cart__item-name">
                  <a className="cart__item-bookName" href={`/book/${id}`}>{bookName}</a> <br />
                  <a className="cart__item-authorName" href={`/book/${id}`}>{author}</a>
                </div>
              </div>
            </td>
            <td className="cart__item-price " title="Giá">
              {price}
            </td>
            <td className="cart__item-quantity">
              <div className="a">
                <button className="btn" onClick={(event) => handleDecrement(event, item)}>
                  -
                </button>
                {quantity}

                <button className="btn" onClick={(event) => handleInscrement(event, item)}>
                  +
                </button>
              </div>
            </td>
            <td className="cart__item-totalPrice">{price * quantity}</td>
            <td className="cart__item-remove">
              <div key={index}>
                <button className="deleteBtn" onClick={(event) => handleRemoveCart(event, item)}>
                  <DeleteForeverIcon></DeleteForeverIcon>
                </button>
              </div>
            </td>
          </tr>
        );
      });
    }
  };
  if (cart.length === 0) {
    return <EmptyCart emptyCart={cart} />
  } else return (
    <div className="col-main">
      <div className="container cart">
        <h1 className="title">Giỏ hàng <span className="title__num">({cart.length} sản phẩm)</span> </h1>
        <div className="row">
          <div className="col-9 col-product">
            <table>
              <thead>
                <tr>
                  <th className="book-name">Sản phẩm</th>
                  <th className="book-price"> Đơn giá </th>
                  <th className="book-quantity">Số lượng</th>
                  <th className="book-totalPrice">Tổng giá</th>
                  <th className="book--remove" >
                    <a className="removeAll" href="#" title="Xóa tất cả" onClick={(event)=>removeAllCart(event)}>Xóa</a> </th>
                </tr>
              </thead>
              <tbody>{renderCart()}</tbody>
            </table>
          </div>
          <div className="col-3 col-payment">
            <Payment totalPrice={handleTotalPrice()} />
          </div>
        </div>
      </div>
    </div>

  );
 
}

export default CartPage;
