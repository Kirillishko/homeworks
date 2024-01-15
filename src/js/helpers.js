const convertCurrencyToSign = (currency) => {
	switch (currency) {
		case 'USD':
			return '$';
		default:
			return 'not assigned';
	}
};

export { convertCurrencyToSign };
