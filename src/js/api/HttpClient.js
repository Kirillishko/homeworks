import axios from 'axios';
import createModal from '../modal';

const apiPass = 'http://localhost:3005';
const HttpClient = axios.create({});

HttpClient.interceptors.request.use(
	function (config) {
		config.baseURL = apiPass;
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
		createModal(error.name, error.message);
		return Promise.reject(error);
	}
);

export { HttpClient, apiPass };
