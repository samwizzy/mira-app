import axios from "axios";

axios.defaults.headers.common["Content-type"] =
  "application/x-www-form-urlencoded";

export const JsonBaseURL = "https://jsonplaceholder.typicode.com";
export const RapidBaseURL = "https://imdb8.p.rapidapi.com";

export const headers = {
  "x-rapidapi-host": "imdb8.p.rapidapi.com",
  "x-rapidapi-key": "62bedff9fcmsh45d0a015d0378a0p1bd064jsnf5956b412f2b",
};
