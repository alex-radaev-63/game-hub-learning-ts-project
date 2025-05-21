import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "22baf3318af044a38a7d7e110b58cc8d",
  },
});
