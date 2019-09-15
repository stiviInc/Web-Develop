import axios from "axios";
import { toast } from "react-toastify";

import Logger from "./logService";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  //Unexpected Errors
  if (!expectedError) {
    Logger.log(error); //Loggin the error
    toast.error("An unexpected error occured"); // Showing a genericall error message!
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
};
