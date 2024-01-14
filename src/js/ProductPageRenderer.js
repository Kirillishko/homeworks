import { getImagePath, getItem } from './api.js';
import { convertCurrencyToSign } from './helpers.js';

const rootContainer = document.getElementById('root-container');
const minCounterValue = 1;

const onDecrementProductCountClick = (e, counterInput) => {
	e.preventDefault();

	const counterValue = +counterInput.value;

	if (counterValue > minCounterValue) {
		counterInput.value = counterValue - 1;
	}
};

const onIncrementProductCountClick = (e, counterInput) => {
	e.preventDefault();

	const counterValue = +counterInput.value;
	counterInput.value = counterValue + 1;
};

const onCounterChange = (e) => {
	e.preventDefault();

	const counterValue = Math.floor(+e.target.value);
	e.target.value = counterValue < minCounterValue ? minCounterValue : counterValue;
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
						<form class="productCountForm">
							<button id="decreaseProductCount">—</button>
							<input id="productCountInput" type="number" value="${minCounterValue}"/>
							<button id="increaseProductCount">+</button>
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

	const productCountForm = document.querySelector('.productCountForm');

	const counterInput = productCountForm.querySelector('#productCountInput');
	counterInput.addEventListener('change', onCounterChange);

	const incrementButton = productCountForm.querySelector('#increaseProductCount');
	const decrementButton = productCountForm.querySelector('#decreaseProductCount');

	incrementButton.addEventListener('click', (e) => onIncrementProductCountClick(e, counterInput));
	decrementButton.addEventListener('click', (e) => onDecrementProductCountClick(e, counterInput));
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
