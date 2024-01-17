import { HttpClient, apiPass } from './HttpClient';

const getData = async (url) => {
	const response = await HttpClient.get(url);
	return response.data;
};

const getItems = () => {
	return getData('/item');
};

const getItem = (itemId) => {
	return getData('/item/' + itemId);
};

const getImagePath = (url) => {
	return apiPass + url;
};

export { getItems, getItem, getImagePath };
