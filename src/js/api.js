const domain = "http://localhost:3006";

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
    return getData(domain + "/item");
}

function getItem(itemId) {
    return getData(domain + "/item/" + itemId);
}

function getFullPicture(url) {
    return getImage(domain + url);
}

function getMinPicture(url) {
    return getImage(domain + url);
}


export {getItems, getItem, getMinPicture, getFullPicture};