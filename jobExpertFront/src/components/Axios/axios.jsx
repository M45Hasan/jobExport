import axios from "axios";

const Api = axios.create({
  baseURL: "https://jobexport.onrender.com",
});

// console.log(Api.defaults.baseURL);

export default Api;
