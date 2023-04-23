import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import SearchResultsList from "../../components/SearchResults/SearchResultsList.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "../../App.css";

const Home = () => {
  const [results, setResults] = useState({});
  return (
    <>
      <Header />
      <div className="App">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          {Object.keys(results).length > 0 && (
            <SearchResultsList results={results} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
