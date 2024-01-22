import IProduct from "IProduct";

const convertCurrencyToSign = (currency: string) => {
    switch (currency) {
        case "USD":
            return "$";
        default:
            return "not assigned";
    }
};

const getFilterProducts = (products: IProduct[], inputSearch: string) => {
    const filter = inputSearch.toLowerCase();
    return products.filter(product => product.name.toLowerCase().includes(filter));
};

export {convertCurrencyToSign, getFilterProducts};
