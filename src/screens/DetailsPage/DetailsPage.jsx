import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FabHotels from "../../assests/image/FabHotels.jpg";
import "./DetailsPage.css";

const DetailsPage = () => {
  const storeData = useSelector((state) => state.detailsData);
  const { details } = storeData;
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(storeData).length === 0) {
      navigate("../");
    }
  }, []);

  return (
    <>
      <Header />
      {Object.keys(storeData).length > 0 && (
        <div className="detailsWrapper">
          <div className="detailsOuter">
            <div className="detailsCard">
              <img
                src={FabHotels}
                alt="product-img"
                className="detailsImage"
              ></img>

              <div className="detailsContent">
                <h3 className="detailsTitle">{details.title}</h3>
                <small>{details.address}</small>
                <div className="detailsDesc">
                  <p>{details.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default DetailsPage;
