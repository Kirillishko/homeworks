const convertCurrencyToSign = (currency: string) => {
    switch (currency) {
        case "USD":
            return "$";
        default:
            return "not assigned";
    }
};

export {convertCurrencyToSign};
