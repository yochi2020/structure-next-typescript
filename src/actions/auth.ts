// import fetch from "isomorphic-fetch";
// import cookie from "js-cookie";
// import { API } from "../config";

// export const sigup = (user:any) => {
//   return fetch(`${API}/auth/register-with-email-password`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type":"application/json",
//     },
//     body:JSON.stringify(user)
//   })
//     .then(response => {
//       return response.json();
//     }).catch(err=>console.log(err));

// };

// export const sigin = (user:any) => {
//   return fetch(`${API}/auth/login-with-email-password`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type":"application/json",
//     },
//     body:JSON.stringify(user)
//   })
//     .then(response => {
//       return response.json();
//     }).catch(err=>console.log(err));

// };

// export const sigout = (next) => {
//   removeCookie("token");
//   removeLocalStorage("user");
//   next();
// };

// export const setCookie = (key,value) => {
//   if (process.browser) {
//     cookie.set(key, value, {
//       expires:1
//     });
//   }
// };

// export const removeCookie = (key) => {
//   if (process.browser) {
//     cookie.remove(key, {
//       expires:1
//     });
//   }
// };

// export const getCookie = (key) => {
//   if (process.browser) {
//     return cookie.get(key);
//   }
// };

// export const setLocalStorage = (key,value) => {
//   if (process.browser) {
//     localStorage.setItem(key,JSON.stringify(value));
//   }
// };

// export const removeLocalStorage = (key) => {
//   if (process.browser) {
//     localStorage.removeItem(key);
//   }
// };

// export const authenticate = (data, next) => {
//   setCookie("token",data.token);
//   setLocalStorage("user",data.user);
//   next();
// };

// export const isAuth = () => {
//   if (process.browser) {
//     const cookieChecked = getCookie("token");
//     if (cookieChecked) {
//       if (localStorage.getItem("user")) {
//         return JSON.parse(localStorage.getItem("user"));
//       } else {
//         return false;
//       }
//     }
//   }
// };

