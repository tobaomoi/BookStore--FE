import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import callApi from "../../api";
import { addCart } from "../../redux/cartSlice";

function SingleBook(props) {
  const dispatch = useDispatch();
  const [bookInformation, setBookInformation] = useState({
    bookId: "",
    bookName: "",
    category: "",
    price: "",
    description: "",
    author: "",
    thumbnail: [],
    quantity: 1
  });

  const [bookImage, setBookImage] = useState();
  const [counter, setCounter] = useState(1);


  const addToCart = (e) => {
    e.preventDefault();
    const action = addCart(bookInformation);
    console.log({ action });
    dispatch(action);
  }

  const handleIncrement = (e, bookInformation) => {
    e.preventDefault();
    setCounter(counter + 1);
    setBookInformation({ ...bookInformation, quantity: bookInformation.quantity + 1 })
    console.log(bookInformation.quantity);
  }

  const handleDecrement = (e, bookInformation) => {
    e.preventDefault();
    if (bookInformation.quantity > 1) {
      setCounter(counter - 1);
      setBookInformation({ ...bookInformation, quantity: bookInformation.quantity - 1 });
      console.log(bookInformation.quantity);
    }

  }

  const renderMainImage = () => {
    return <img className="main-img" src={bookImage} alt="img" />;
  };
  const changeImage = (event, book) => {
    event.preventDefault();

    const bookList = document.getElementsByClassName("box");
    console.log(bookList);
    for (let item of bookList) {
      item.classList.remove("selected");
    }
    event.target.className += " selected";
    setBookImage(book);
  };

  const renderBookImages = () => {
    const { thumbnail } = bookInformation;
    return thumbnail.map((book, index) => {
      return (
        <button key={index}>
          <img
            className={"box" + (index === 0 ? " selected" : "")}
            onClick={(event) => {
              changeImage(event, book);
            }}
            src={book}
            alt="thumb"
          />
        </button>
      );
    });
  };

  const renderSingleBookPage = () => {
    if (setBookInformation) {
      return (
        <div className="book">
          <div className="container">
            <div className="row book__container">
              <div className="col-5 book__img">{renderMainImage()}</div>
              <div className="col-1 seperateLine"></div>
              <div className="col-6 book__information">
                <h1 className="bookName">{bookInformation.bookName}</h1>
                <div className="author">Tác giả: <span className="book__author">{bookInformation.author}</span> </div>
                <div className="description">Mô tả:  <span className="book__description">{bookInformation.description}</span> </div>
                <div className="price">{bookInformation.price} đ</div>
                <div className="thumbnail-img">
                  {renderBookImages()}
                </div>
                <br />
                <div className="quantity">
                  <div className="quantityInput">
                    <p className="label">Số lượng</p>
                    <div className="group-input">
                      <button className="group-input-btn" disabled={(bookInformation.quantity === 1 ? true : false)} onClick={(event) => handleDecrement(event, bookInformation)}>-</button>
                      <input type="text" className="input" value={counter} />
                      <button className="group-input-btn" onClick={(event) => handleIncrement(event, bookInformation)}>+</button>
                    </div>
                  </div>
                </div>
                <form className="btn-add" onSubmit={(event) => addToCart(event)}>
                  <button className="btn" type="submit">Thêm vào giỏ hàng</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  useEffect(() => {
    const bookId = props.match.params.bookId;
    callApi.get(`books/getBook/${bookId}`).then((result) => {
      const { bookName, category, price, description, author, thumbnail } =
        result.data;
      setBookInformation({
        ...bookInformation,
        bookId,
        bookName,
        category,
        price,
        description,
        author,
        thumbnail,
      });
      setBookImage(thumbnail[0]);
      console.log(bookInformation.quantity);
    });
  }, []);

  return (
    renderSingleBookPage()
  );
}

export default SingleBook;
