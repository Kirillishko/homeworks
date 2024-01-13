import { getPicture, getItem } from './api.js';
import convertCurrencyToSign from './helpers.js';

const main = document.getElementById('root-container');

let counter;
let counterValue = 1;

const onDecrementClick = (e) => {
	e.preventDefault();

	if (counterValue > 0) {
		counterValue--;
		counter.value = counterValue;
	}
};

const onIncrementClick = (e) => {
	e.preventDefault();
	counterValue++;
	counter.value = counterValue;
};

const renderProduct = async (product) => {
	const { name, details, description, info, picture, price } = product;
	const finalPrice = convertCurrencyToSign(price.currency) + price.value;
	const image = getPicture(picture.path);

	const html = `<section class="content">
				<div class="image">
					<img alt="Product" src="${image}" />
				</div>
				<div class="info">
					<div class="text">
						<h2>${name}</h2>
						<p>${description}. ${info}</p>
					</div>
					<div class="text">
						<h3>Детали</h3>
						<p>${details}</p>
					</div>
					<div class="buttons">
						<h1>${finalPrice}</h1>
						<form class="counter">
							<button id="decrease">—</button>
							<input id="counter" type="number" value="${counterValue}"/>
							<button id="increase">+</button>
						</form>
						<button class="cart-button">Add to cart</button>
						<label class="favorite">
							<input type="checkbox" />
							<svg class="favorite-icon">
								<use href="#favorite-icon"></use>
							</svg>
							<svg class="favorite-active-icon">
								<use href="#favorite-active-icon"></use>
							</svg>
						</label>
					</div>
				</div>
			</section>`;

	main.innerHTML = html;

	counter = document.getElementById('counter');
	const decrementButton = document.getElementById('decrease');
	const incrementButton = document.getElementById('increase');
	decrementButton.addEventListener('click', onDecrementClick);
	incrementButton.addEventListener('click', onIncrementClick);
};

const init = async () => {
	try {
		const href = window.location.href;
		const id = href.substring(href.indexOf('id=') + 3);
		const data = await getItem(id);
		const product = data.content;
		renderProduct(product);
	} catch (e) {
		throw new Error(e);
	}
};

init();
