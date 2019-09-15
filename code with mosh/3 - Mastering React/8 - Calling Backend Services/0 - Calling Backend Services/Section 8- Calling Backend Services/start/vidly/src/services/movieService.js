import config from "../config.json";
import http from "./httpServices";

function movieURL(id) {
  return `${config.baseURL}movies/${id}`;
}

//Returns a promise!
export function getMovies() {
  return http.get(config.baseURL + "movies");
}

export function deleteMovie(id) {
  return http.delete(movieURL(id));
}

export function getMovie(id) {
  return http.get(movieURL(id));
}

export function saveMovie(movie) {
  //Firstly we have to check if we are dealing with a new movie or with an existing one!
  if (movie._id) {
    //The background service doesn't like to receive an id property in the body....
    //We have to remove the id property from the movie object, but we can not do it directly because the movie object its part of the application's state!
    const body = { ...movie };
    delete body._id;
    return http.put(movieURL(movie._id), body); //Very important to make sure you are sending an object without the ._id property, otherwise it won't work
  }
  //if it wasn't an existing movie, we are dealing with a new one!
  return http.post(config.baseURL + "movies", movie);
}
