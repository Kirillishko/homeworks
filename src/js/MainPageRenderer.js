import { getItems, getImagePath } from './api.js';
import { convertCurrencyToSign } from './helpers.js';

const rootContainer = document.getElementById('root-container');
const searchInput = document.querySelector('.search-input');

const debounce = (callback, delay) => {
	let timeout;
	return function () {
		console.log('clear');
		clearTimeout(timeout);
		timeout = setTimeout(callback, delay);
	};
};

const onSearchInput = () => {
	const value = searchInput.value;

	for (let card of rootContainer.children) {
		const cardName = card.querySelector('.card-name').textContent.toLowerCase();

		if (cardName.includes(value)) {
			card.classList.remove('hidden');
		} else {
			card.classList.add('hidden');
		}
	}
};

searchInput.addEventListener('input', debounce(onSearchInput, 1000));

// searchInput.addEventListener('input', (e) => {
// 	let timer;

// 	const onSearchInput = () => {
// 		const value = e.target.value.toLowerCase();

// 		for (let card of rootContainer.children) {
// 			const cardName = card.querySelector('.card-name').textContent.toLowerCase();

// 			if (cardName.includes(value)) {
// 				card.classList.remove('hidden');
// 			} else {
// 				card.classList.add('hidden');
// 			}
// 		}
// 	};

// 	timer = setTimeout() onSearchInput();
// });

const renderProducts = (products) => {
	const html = products.reduce((accumulator, value) => {
		const { id, like, picture, name, price } = value;
		const priceWithSign = convertCurrencyToSign(price.currency) + price.value;
		const imagePath = getImagePath(picture.path);

		return (
			accumulator +
			`   <figure class="card">
						<label class="favorite">
							<input type="checkbox" ${like && 'checked'}/>
							<svg class="favorite-icon">
								<use href="#favorite-icon"></use>
							</svg>
							<svg class="favorite-active-icon">
								<use href="#favorite-active-icon"></use>
							</svg>
						</label>
						<a href="product.html?id=${id}"><img alt="${picture.alt}" src="${imagePath}" /></a>
						<figcaption class="info">
							<h2>
								<a class="card-name" href="product.html?id=${id}">${name}</a>
							</h2>
							<p>${priceWithSign}</p>
						</figcaption>
					</figure>`
		);
	}, '');

	rootContainer.innerHTML = html;
};

const init = async () => {
	try {
		const { content } = await getItems();
		renderProducts(content);
	} catch (e) {
		console.error(e);
	}
};

init();
