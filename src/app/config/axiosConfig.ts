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
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "62bedff9fcmsh45d0a015d0378a0p1bd064jsnf5956b412f2b",
  },
});
