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
import ReactPaginate from "react-paginate";
import { useHistory, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
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
  const [pageNumber, setPageNumber] = useState(0);
  const history = useHistory();
  const location = useLocation();
  const path = window.location.pathname;

  const getBooksCateogry = () => {
    return new URLSearchParams(window.location.search).get("category");
  }

  const getAllBooks = () => {
    const category = getBooksCateogry();
    callApi
      .get("/books/getBookByPage", {
        params: {
          page: pageNumber,
          category: category
        },
      })
      .then((result) => {
        console.log(location.search.substring());
        setBookData(result.data);
      });
  };
  const listBook = () => {
    if (bookData.data && bookData.data.length > 0) {
      return bookData.data.map((book, index) => {
        return <BookItem key={index} book={book} />;
      });
    }
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const category = getBooksCateogry();
    getAllBooks();
    history.push(`${path}?page=${pageNumber + 1}&category=${category}`)
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
                        <NavHashLink smooth to={`/allBook?page=${pageNumber}&category=all`}>Tất cả</NavHashLink>
                      </li>
                      <li className="book__categories-link">
                        <NavHashLink smooth to={`/allBook?page=${pageNumber}&category=giao duc`}>Giáo dục</NavHashLink>
                      </li>
                      <li className="book__categories-link">
                        <NavHashLink smooth to={`/allBook?page=${pageNumber}&category=the thao`}>Thể thao</NavHashLink>
                      </li>
                      <li className="book__categories-link">
                        <NavHashLink smooth to={`/allBook?page=${pageNumber}&category=kinh doanh`}>Kinh doanh</NavHashLink>
                      </li>
                      <li className="book__categories-link">
                        <NavHashLink smooth to={`/allBook?page=${pageNumber}&category=tinh cam`}>Tình cảm</NavHashLink>
                      </li>
                      <li className="book__categories-link">
                        <NavHashLink smooth to={`/allBook?page=${pageNumber}&category=phieu luu`}>Phiêu lưu</NavHashLink>
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
                <ReactPaginate
                  previousLabel={"‹"}
                  nextLabel={"›"}
                  pageCount={bookData.last_page}
                  onPageChange={changePage}
                  containerClassName={"paginationBtn"}
                  previousLinkClassName={"previousBtn"}
                  nextLinkClassName={"nextBtn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                  breakLabel={"..."}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBookPage;
