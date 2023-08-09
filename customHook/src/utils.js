import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export default customFetch;
