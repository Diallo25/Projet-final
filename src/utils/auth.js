// src/utils/auth.js
export const isLoggedIn = () => {
  return !!localStorage.getItem('loggedInUser');
};

export const logout = () => {
  localStorage.removeItem('loggedInUser');
};