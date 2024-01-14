import { getImagePath, getItem } from './api.js';
import convertCurrencyToSign from './helpers.js';

const rootContainer = document.getElementById('root-container');

let counter;
let counterValue = 1;

const onDecrementClick = (e) => {
	e.preventDefault();

	if (counterValue > 1) {
		counterValue--;
		counter.value = counterValue;
	}
};

const onIncrementClick = (e) => {
	e.preventDefault();
	counterValue++;
	counter.value = counterValue;
};

const onCounterChange = (e) => {
	e.preventDefault();

	const value = Math.floor(+e.target.value);
	e.target.value = value < 1 ? 1 : value;
	counterValue = e.target.value;
};

const renderProduct = async (product) => {
	const { name, details, description, info, picture, price } = product;
	const priceWithSign = convertCurrencyToSign(price.currency) + price.value;
	const imagePath = getImagePath(picture.path);

	const html = `<section class="content">
				<div class="image">
					<img alt="Product" src="${imagePath}" />
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
						<h1>${priceWithSign}</h1>
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

	rootContainer.innerHTML = html;

	counter = document.getElementById('counter');
	counter.addEventListener('change', onCounterChange);
	const decrementButton = document.getElementById('decrease');
	const incrementButton = document.getElementById('increase');
	decrementButton.addEventListener('click', onDecrementClick);
	incrementButton.addEventListener('click', onIncrementClick);
};

const init = async () => {
	try {
		const href = window.location.href;
		const id = href.substring(href.indexOf('id=') + 3);
		const { content } = await getItem(id);
		renderProduct(content);
	} catch (e) {
		console.error(e);
	}
};

init();
