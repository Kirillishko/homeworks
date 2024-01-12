import {getItems, getItem, getFullPicture, getMinPicture} from "./api.js";
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
    const {value} = e.target;
    const filteredProducts = products.filter(product => product.name.includes(value));

    // deleteProducts();
    renderProducts(filteredProducts);
})

function deleteProducts() {
    const children = main.children;

    while (children.length !== 0)
        main.removeChild(children[0]);
}

async function renderProducts(products) {
    let html = "";
    await products.map(value => productToHTML(value).then(result => html += result));
    main.innerHTML = html;
}

async function productToHTML(product) {
    const {like, picture, name, price} = product;
    const currencySign = convertCurrencyToSign(price.currency);

    let html = "";

    html += `<figure>
                 <label class="favorite">
                    <input type="checkbox" ${like && "checked"}/>
                    <svg class="favorite-icon">
                        <use href="#favorite-icon"></use>
                    </svg>
                    <svg class="favorite-active-icon">
                        <use href="#favorite-active-icon"></use>
                    </svg>
                </label>
                `;

    await getMinPicture(picture.path).then(minPicture => {
        html += `<img alt="${picture.alt}" src="${minPicture}"/>`;
    });

    html += `<figcaption>
                <h2><a href="product.html">${name}</a></h2>
                <p>${currencySign}${price.value}</p>
            </figcaption>
        </figure>`;

    // console.log(html);

    return html;
}

init();