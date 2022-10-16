/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import callApi from "../../api";
import BookItem from "../../Components/BookItem";
import { useHistory } from "react-router-dom";
import Pagination from "../../Components/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function AllBookPage() {
  const classes = useStyles();
  const [bookData, setBookData] = useState({});
  const getPageNumber = () => {
    return new URLSearchParams(window.location.search).get("page");
  }
  const [pageNumber, setPageNumber] = useState(getPageNumber());
  const history = useHistory();
  const path = window.location.pathname;

  const getBooksCategory = () => {
    return new URLSearchParams(window.location.search).get("category");
  }
  const getAllBooks = () => {
    const category = getBooksCategory();
    callApi
      .get("/books/getBookByPage", {
        params: {
          page: pageNumber,
          category: category
        },
      })
      .then((result) => {
        setBookData(result.data);
      });

  };
  const listBook = () => {
    if (bookData.data && bookData.data.length > 0) {
      const responseData = bookData.data.map((book) => ({ ...book, quantity: 1 }));
      return responseData.map((book, index) => {
        return <BookItem key={index} book={book} />;
      });
    }
  };

  useEffect(() => {
    const category = getBooksCategory();
    history.push(`${path}?page=${pageNumber}&category=${category}`)
    getAllBooks();
  }, [pageNumber, new URLSearchParams(window.location.search).get("category")]);

  return (
    <div className={classes.root}>
      <div className="site-allBook ">
        <div className="container">
          <div className="row">
            <div className=" col-3 sidebar">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Chủ đề
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul className="book__categories">
                      <li className="book__categories-link">
                        <a href={`/allBook?page=0&category=all`}>Tất cả</a>
                      </li>
                      <li className="book__categories-link">
                        <a href={`/allBook?page=0&category=giao duc`}>Giáo dục</a>
                      </li>
                      <li className="book__categories-link">
                        <a href={`/allBook?page=0&category=tham hiem`}>Thám hiểm</a>
                      </li>
                      <li className="book__categories-link">
                        <a href={`/allBook?page=0&category=kinh te`}>Kinh tế</a>
                      </li>
                      <li className="book__categories-link">
                        <a href={`/allBook?page=0&category=tam ly`}>Tâm lý</a>
                      </li>
                      <li className="book__categories-link">
                        <a href={`/allBook?page=0&category=phieu luu`}>Phiêu lưu</a>
                      </li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </div>
            <div className=" col content ">
              <div className="content__controlBar"></div>
              <div className="content__main">
                <ul className="books list-unstyled row row-cols-4">
                  {listBook()}
                </ul>
              </div>
              <div className="content__pagination">
                <Pagination lastPage={bookData.last_page} setNumberPage={setPageNumber} currentPage={pageNumber} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBookPage;
