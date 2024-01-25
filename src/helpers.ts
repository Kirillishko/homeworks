import IProduct from "IProduct";

const convertCurrencyToSign = (currency: string) => {
    switch (currency) {
        case "USD":
            return "$";
        default:
            return "not assigned";
    }
};

const getFilteredProducts = (products: IProduct[], inputSearch: string) => {
    return products.filter(product => product.name.toLowerCase().includes(inputSearch));
};

export {convertCurrencyToSign, getFilteredProducts};
