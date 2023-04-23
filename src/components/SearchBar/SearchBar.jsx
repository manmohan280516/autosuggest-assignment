import React, { useRef, useEffect, useState } from "react";
import useGoogleMapsApi from "../../customHooks/useGoogleMapsApi";
import { hotelData } from "../../constants/HotelData";
import "./SearchBar.css";

const SearchBar = ({ setResults }) => {
  const autocompleteRef = useRef();
  const inputRef = useRef();
  const googleMapsApi = useGoogleMapsApi();
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState({
    hotels: [],
    locations: [],
  });

  useEffect(() => {
    setResults(options);
  }, [options]);

  useEffect(() => {
    if (googleMapsApi) {
      initService(inputValue);
      autocompleteRef.current = new googleMapsApi.places.Autocomplete(
        inputRef.current,
        { types: ["(cities)"] }
      );
      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current.getPlace();
      });
    }
  }, [googleMapsApi, inputValue]);

  const initService = (inputValue = "") => {
    const displaySuggestions = function (predictions, status) {
      if (
        status != googleMapsApi.places.PlacesServiceStatus.OK ||
        !predictions
      ) {
        alert(status);
        return;
      }
      let locationsArr = [];
      predictions.forEach((prediction) => {
        let locationsObj = {};
        locationsObj["main_text"] = prediction.structured_formatting.main_text;
        locationsObj["secondary_text"] =
          prediction.structured_formatting.secondary_text;
        locationsObj["location_id"] = prediction.place_id;
        locationsObj["description"] = prediction.description;
        locationsArr.push(locationsObj);
      });
      setData("locations", locationsArr);
    };

    const service = new googleMapsApi.places.AutocompleteService();
    if (inputValue !== "") {
      service.getQueryPredictions({ input: inputValue }, displaySuggestions);
    }
  };

  const fetchData = (value) => {
    const filtered = hotelData.hotels.filter(
      (item) =>
        item.title.toLowerCase().includes(value) ||
        item.address.toLowerCase().includes(value)
    );
    setData("hotels", filtered);
  };

  const setData = (key, val) => {
    setOptions({
      ...options,
      [key]: val,
    });
  };

  const handleInputChange = (val) => {
    setInputValue(val);
    fetchData(val);
  };

  return (
    <div className="input-wrapper">
      <input
        value={inputValue}
        type="text"
        placeholder="Search location...."
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
