import axios from "axios";

const api = axios.create({
  baseURL: "https://api.publicapis.org",
});

export { api };
