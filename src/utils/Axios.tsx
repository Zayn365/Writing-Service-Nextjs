import axios from "axios";
const server ="https://write-articles-for-me.vercel.app/api";
// const local ="http://127.0.0.1:3000/api";
// console.log(local);
const local = process.env.LOCAL;
export const Axios = axios.create({
    baseURL: local,
    // headers: {
    //     'Content-Type': 'application/json',
    //     "Access-Control-Allow-Credentials": "true",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
    //     "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    //   }
})