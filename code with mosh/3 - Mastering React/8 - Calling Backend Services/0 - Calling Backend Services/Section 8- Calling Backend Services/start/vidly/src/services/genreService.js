import config from "../config.json";
import http from "./httpServices";

/*
 ** Return ---> This method returns an array of objects, NOT a promise!
 ** This method is applying approach number 1 ... (Returns a promise since the service method!)
 */
export function getGenres() {
  return http.get(config.baseURL + "genres");
}
