//This service will be responsable for the operations of log in and log out!

import config from "../config.json";
import http from "../services/httpService";
import jwtDecode from "jwt-decode";

const endPointAuth = config.apiUrl + "/auth";
const tokenKeyName = "token";

//Call the setJWT method....  the commons headers will be added since this service when the setJWT() method is called
http.setJWT(getJWT());

export async function login(email, password) {
  const { data: jwt } = await http.post(endPointAuth, { email, password });
  localStorage.setItem(tokenKeyName, jwt); //Save the JWT in the localStorage of the browser!
}

export function loginWithJWT(jwt) {
  localStorage.setItem(tokenKeyName, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKeyName);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKeyName);
    return jwtDecode(jwt);
  } catch (error) {}
}

export function getJWT() {
  return localStorage.getItem(tokenKeyName);
}

//Export the functions to be accessed as an oriented object way
export default {
  login,
  loginWithJWT,
  logout,
  getCurrentUser,
  getJWT
};
