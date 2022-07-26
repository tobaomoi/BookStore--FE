import React from "react";

function PageNotFound(props) {
  return (
    <div className="container">
      <div className="page__not__found">
        <p>OOPS! PAGE NOT FOUND</p>
        <h1>404</h1>
        <p>WE ARE SORRY, THE PAGE YOU REQUESTED WAS NOT FOUND.</p>
        <button
          onClick={() => { props.history.push("/homepage") }}
        >
          BACK TO HOME PAGE
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;