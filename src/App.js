import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home.jsx";
import DetailsPage from "./screens/DetailsPage/DetailsPage.jsx";
import { Provider } from "react-redux";
import store from "../src/store/index.js";
import ErrorPage from "./screens/ErrorPage/ErrorPage.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route exact path="/" element={<Home />} />
            <Route exact path="/details" element={<DetailsPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
