import config from "../config.json";
import http from "./httpService";

const endPointUsers = config.apiUrl + "/users";

export function registerUser(user) {
  return http.post(endPointUsers, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
