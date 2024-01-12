const domain = "http://localhost:3006";
const url = "http://localhost:3006";

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getImage(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    const resultURL = URL.createObjectURL(blob);
    return resultURL;
}

function getItems() {
    return getData(url + "/item");
}

function getItem(itemId) {
    return getData(url + "/item/" + itemId);
}

function getFullPicture(pictureId) {
    return getData(url + "/picture/full/" + pictureId);
}

function getMinPicture(url) {
    return getImage(domain + url);
}


export {getItems, getItem, getMinPicture, getFullPicture};