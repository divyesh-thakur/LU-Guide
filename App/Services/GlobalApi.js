import axios from "axios";
const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyD8sachYvmPciPxRtVgh8c-y9z1v9CnoHw";

const nearByPlace = () =>
  axios.get(
    BASE_URL +
      "/nearbysearch/json?" +
      "&location=-33.8670522%2C151.1957362&radius=1500&type=restaurant" +
      "&key=" +
      API_KEY
  );

export default {
  nearByPlace,
};
