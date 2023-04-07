// import { getCookie } from "./auth";
// import fetch from "isomorphic-fetch";
// import { API } from "../config";

// import { cookies } from "next/headers";

// export const userPublicProfile = async(username:string,token:string) => {
//   console.log("🚀 ~ file: user.ts:9 ~ userPublicProfile ~ token", token);
//   return await fetch(`${API}/user/profile`, {
//     method: "POST",
//     headers: {
//       Accept:"application/json",
//       "Content-Type": "application/json",
//       Authorization:`Bearer ${token}`
//     },
//   }).then(response => {
//     return response.json();
//   }).catch(err => {
//     console.log(err);

//   });

// };

// export const getProfile = token => {
//   return fetch(`${API}/user/user`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`
//     }
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };

// export const update = (token, user) => {
//   return fetch(`${API}/user/update`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`
//     },
//     body: user
//   })
//     .then(response => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };