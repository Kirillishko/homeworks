const apiPass = 'http://localhost:3006';

const getData = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

const getItems = () => {
	return getData(apiPass + '/item');
};

const getItem = (itemId) => {
	return getData(apiPass + '/item/' + itemId);
};

const getImagePath = (url) => {
	return apiPass + url;
};

export { getItems, getItem, getImagePath };
