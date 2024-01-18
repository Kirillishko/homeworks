import { HttpClient, apiPass } from './HttpClient';

const getData = async (url) => {
	const response = await HttpClient.get(url);
	return response.data;
};

const getItems = () => getData('/item');

const getItem = (itemId) => getData(`/item/${itemId}`);

const getImagePath = (url) => apiPass + url;

export { getItems, getItem, getImagePath };
