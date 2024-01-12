import {getItems, getMinPicture} from "./api.js";
import convertCurrencyToSign from "./helpers.js";

const main = document.getElementsByTagName("main")[0];
let products = [];

async function init() {
    const data = await getItems();
    products = data.content;
    renderProducts(products);
}

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(value));

    deleteProducts();
    renderProducts(filteredProducts);
});

function deleteProducts() {
    main.innerHTML = "";
}

const favoriteHandler = (e) => {
    const id = e.target.attributes.getNamedItem("data-id").value;

    for (const value of products) {
        if (value.id === id) {
            value.like = !value.like;
            return;
        }
    }
};

async function renderProducts(products) {
    for (const product of products) {
        const {id, like, picture, name, price} = product;
        const currencySign = convertCurrencyToSign(price.currency);

        const card = document.createElement("figure");
        card.classList.add("card");
        const favorite = document.createElement("label");
        favorite.classList.add("favorite");
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("data-id", id);
        checkbox.addEventListener("click", (e) => favoriteHandler(e));
        like && checkbox.setAttribute("checked", "checked");
        const favoriteIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        favoriteIcon.classList.add("favorite-icon");
        const useFavoriteIcon = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useFavoriteIcon.setAttribute("href", "#favorite-icon");
        const favoriteActiveIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        favoriteActiveIcon.classList.add("favorite-active-icon");
        const useFavoriteActiveIcon = document.createElementNS("http://www.w3.org/2000/svg", "use");
        useFavoriteActiveIcon.setAttribute("href", "#favorite-active-icon");
        const figcaption = document.createElement("figcaption");
        const productName = document.createElement("h2");
        const productLink = document.createElement("a");
        productLink.setAttribute("href", "product.html");
        productLink.text = name;
        const productPrice = document.createElement("p");
        productPrice.innerHTML = `${currencySign}${price.value}`;


        card.append(favorite);
        favorite.append(checkbox);
        favorite.append(favoriteIcon);
        favoriteIcon.append(useFavoriteIcon);
        favorite.append(favoriteActiveIcon);
        favoriteActiveIcon.append(useFavoriteActiveIcon);

        await getMinPicture(picture.path).then(minPicture => {
            const image = document.createElement("img");
            image.src = minPicture;
            image.setAttribute("alt", picture.alt);
            card.append(image);
        });

        figcaption.append(productName);
        productName.append(productLink);
        figcaption.append(productPrice);
        card.append(figcaption);


        main.append(card);
    }
}

init();