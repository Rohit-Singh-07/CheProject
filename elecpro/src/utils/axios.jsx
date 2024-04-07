import axios from "axios";

const instance = axios.create({
  baseURL: "https://cea.nic.in/api",
});

export default instance;