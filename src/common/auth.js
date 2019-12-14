const TOKEN_KEY = 'ut';
const USERNAME_KEY = 'un';
const USER_AVATAR = 'ua';

export default {
  getToken() {
    return window.localStorage.getItem(TOKEN_KEY) || window.sessionStorage.getItem(TOKEN_KEY);
  },
  setToken(token) {
    window.sessionStorage.setItem(TOKEN_KEY, token);
  },
  setTokenLong(token) {
    window.localStorage.setItem(TOKEN_KEY, token);
  },
  removeToken() {
    window.localStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(USERNAME_KEY);
  },
  setUserName(email) {
    window.localStorage.setItem(USERNAME_KEY, email);
  },
  getUserName() {
    return window.localStorage.getItem(USERNAME_KEY);
  },
  setUserAvatar(avatar) {
    window.localStorage.setItem(USER_AVATAR, avatar);
  },
  getUserAvatar() {
    return window.localStorage.getItem(USER_AVATAR);
  },
};
