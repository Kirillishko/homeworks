import {getFullPicture, getItem} from "./api.js";
import convertCurrencyToSign from "./helpers.js";

let product;

async function init() {
    const href = window.location.href;
    const id = href.substring(href.indexOf("=") + 1);
    const data = await getItem(id);
    product = data.content;
    renderProduct(product);
}

async function renderProduct(product) {
    const {name, details, description, info, picture, price} = product;

    const [firstText, secondText] = document.querySelectorAll(".text");
    const [nameEl, infoEl] = firstText.children;
    const detailsEl = secondText.children[1];
    const priceEl = document.querySelector(".buttons").children[0];
    const imageEl = document.querySelector(".image").children[0];
    const currencySign = convertCurrencyToSign(price.currency);

    nameEl.textContent = name;
    infoEl.textContent = `${description}. ${info}`;
    detailsEl.textContent = details;
    priceEl.textContent = `${currencySign}${price.value}`;

    await getFullPicture(picture.path).then(fullPicture => {
        imageEl.src = fullPicture;
        imageEl.setAttribute("alt", picture.alt);
    });
}

init();