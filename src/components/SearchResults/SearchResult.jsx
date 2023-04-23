import React from "react";
import "./SearchResult.css";

const SearchResult = ({ mainText, subText, handleClick, resultKey, index }) => {
  return (
    <div
      className="search-result"
      onClick={() => handleClick(resultKey, index)}
    >
      {mainText} <small className="sub-text">{subText}</small>
    </div>
  );
};

export default SearchResult;
