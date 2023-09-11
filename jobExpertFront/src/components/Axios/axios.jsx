import axios from "axios";

const Api = axios.create({
  baseURL: "https://weero-jobexpert.netlify.app",
});

// console.log(Api.defaults.baseURL);

export default Api;
