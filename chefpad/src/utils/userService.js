import userAPI from './userAPI';
import tokenService from './tokenService';

function signup(user) {
  return userAPI.signup(user)
    .then(token => tokenService.setToken(token.token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function login(user) {
  return userAPI.login(user)
    .then(token => tokenService.setToken(token.token));
}

function logout() {
  tokenService.removeToken();
}

export default {
  signup,
  getUser,
  logout,
  login
}
