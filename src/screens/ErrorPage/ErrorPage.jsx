import React from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="App">
        <div className="search-bar-container">
          <h2>Error 404</h2>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
