import axios from "axios";

export const JsonPlaceHolderBaseURL = "https://jsonplaceholder.typicode.com";
export const RapidApiBaseURL = "https://imdb8.p.rapidapi.com";

export const jsonAPI = axios.create({
  baseURL: JsonPlaceHolderBaseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export const rapidAPI = axios.create({
  baseURL: RapidApiBaseURL,
  headers: {
    "Content-type": "application/json",
    "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST as string,
    "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY as string,
  },
});
