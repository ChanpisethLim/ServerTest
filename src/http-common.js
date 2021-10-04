import axios from "axios";

export default axios.create({
  baseURL: "http://35.240.196.149/api",
  headers: {
    "Content-type": "application/json"
  }
});
