import React from "react";

function Pagination(props) {
    const { lastPage, setNumberPage,currentPage } = props;
    const pageNumbers = [];
    for (let i = 1; i <= (lastPage + 1); i++) {
        pageNumbers.push(i);
    }
    const increasePage = (e) => {
        e.preventDefault();
        setNumberPage(currentPage + 1);
    };
    const decreasePage = (e) => {
        e.preventDefault();
        setNumberPage(currentPage - 1);
    }
    const handlePageNumber = (number) => {
        setTimeout(() => {
            if (setNumberPage(number)) {
                window.location.reload();
            }

        },1000)
    }
    return (
        <div>
            <ul className="pagination">
                <li> <a className="paginationBtn" onClick={(event) => decreasePage(event)}>《</a></li>
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a onClick={() => { handlePageNumber(number - 1) }} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <li><a className="paginationBtn" onClick={(event) => increasePage(event)}>》</a></li>
            </ul>
        </div>
    )
}

export default Pagination
