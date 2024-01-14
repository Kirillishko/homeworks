const apiPass = 'http://localhost:3006';

async function getData(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

// function getImage(url) {
// 	const response = await fetch(url);
// 	const blob = await response.blob();
// 	const resultURL = URL.createObjectURL(blob);
// 	return resultURL;
// }

function getItems() {
	return getData(apiPass + '/item');
}

function getItem(itemId) {
	return getData(apiPass + '/item/' + itemId);
}

function getImagePath(url) {
	return apiPass + url;
}

export { getItems, getItem, getImagePath };
