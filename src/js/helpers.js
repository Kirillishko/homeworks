const convertCurrencyToSign = (currency) => {
    let sign;

    switch (currency) {
        case "USD" :
            sign = "$";
            break;
        default:
            sign = "not assigned";
            break;
    }

    return sign;
}

export default convertCurrencyToSign;