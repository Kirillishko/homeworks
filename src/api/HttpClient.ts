import axios from "axios";

export const apiPass = "http://localhost:3006";
export const HttpClient = axios.create({
    baseURL: apiPass,
});
