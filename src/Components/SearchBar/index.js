import React, { useState } from "react";


function SearchBar({ placeholder, data }) {
  const [filterData, setFilterData] = useState([]);
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((book) => {
      return book.bookName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D")
        .includes(
          searchWord
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/đ/g, "d")
            .replace(/Đ/g, "D")
        );
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };
  return (
    <div className="header__navbar-search">
      <div className="searchInput">
        <input
          className="SearchBar"
          type="search"
          placeholder={placeholder}
          onChange={handleFilter}
        />
      </div>
      {filterData.length !== 0 && (
        <div className="dataResult">
          {filterData.map((book, key) => {
            return (
              <a
                key={key}
                className="dataItem"
                href={`https://hieusachcuanhat.vercel.app/book/${book.id}`}
              >
                <p className="bookName">
                  <span>
                    <img
                      className="smallThumbnail"
                      src={book.thumbnail[0]}
                      alt={book.bookName}
                    />
                  </span>
                  {book.bookName}
                </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
