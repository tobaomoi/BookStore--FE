import React from 'react'
import {
    Link,
    useLocation
  } from "react-router-dom";
function useQuery(){
    return new URLSearchParams(useLocation().search);
}

function Pagination(props) {
    const {lastPage} = props;
    const pageNumbers = [];
    for (let i = 1; i <= lastPage; i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
