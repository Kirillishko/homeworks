import { getItems, getPicture } from './api.js';
import convertCurrencyToSign from './helpers.js';

const main = document.getElementById('root-container');
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', (e) => {
	const value = e.target.value.toLowerCase();

	for (let card of main.children) {
		const cardName = card.querySelector('.info').getElementsByTagName('a')[0].textContent.toLowerCase();

		if (cardName.includes(value)) {
			card.classList.remove('none');
		} else if (!card.classList.contains('none')) {
			card.classList.add('none');
		}
	}
});

const renderProducts = (products) => {
	let html = '';
	for (const product of products) {
		const { id, like, picture, name, price } = product;
		const finalPrice = convertCurrencyToSign(price.currency) + price.value;
		const image = getPicture(picture.path);

		html += `   <figure class="card">
		                <label class="favorite">
			                <input type="checkbox" ${like && 'checked'}/>
			                <svg class="favorite-icon">
				               <use href="#favorite-icon"></use>
			                </svg>
			                <svg class="favorite-active-icon">
			                	<use href="#favorite-active-icon"></use>
			                </svg>
		                </label>
		                <a href="product.html?id=${id}"><img alt="${picture.alt}" src="${image}" /></a>
		            	<figcaption class="info">
		                    <h2>
		                        <a href="product.html?id=${id}">${name}</a>
		                    </h2>
		                    <p>${finalPrice}</p>
		                </figcaption>
		            </figure>`;
	}

	main.innerHTML = html;
};

const init = async () => {
	try {
		const data = await getItems();
		const products = data.content;
		renderProducts(products);
	} catch (e) {
		throw new Error(e);
	}
};

init();
