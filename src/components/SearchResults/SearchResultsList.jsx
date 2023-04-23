import React from "react";
import SearchResult from "./SearchResult";
import { useDispatch } from "react-redux";
import { setDetailsData } from "../../actions/DetailsActions";
import { useNavigate } from "react-router-dom";
import "./SearchResultsList.css";

const SearchResultsList = ({ results }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResultClick = (resultKey, index) => {
    const data = results[resultKey][index];
    dispatch(setDetailsData(data));
    navigate("./details");
  };
  return (
    <div className="results-list">
      {Object.keys(results).map((resultKey) => {
        const heading = resultKey.charAt(0).toUpperCase() + resultKey.slice(1);
        return (
          <>
            {results[resultKey].length !== 0 && (
              <h4 className="search-result">{heading}</h4>
            )}
            {results[resultKey].map((res, index) => {
              const key =
                resultKey === "hotels" ? res.hotelID : res.location_id;
              const mainText =
                resultKey === "hotels" ? res.title : res.main_text;
              const subText =
                resultKey === "hotels" ? res.address : res.secondary_text;
              return (
                <React.Fragment key={key}>
                  <SearchResult
                    mainText={mainText}
                    subText={subText}
                    handleClick={handleResultClick}
                    resultKey={resultKey}
                    index={index}
                  />
                </React.Fragment>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default SearchResultsList;
