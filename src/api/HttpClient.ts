import axios from "axios";

const apiPass = "http://localhost:3006";
const HttpClient = axios.create({
    baseURL: apiPass,
});

HttpClient.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

HttpClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export {HttpClient, apiPass};
