import IProduct from "IProduct";
import { apiPass } from "./api";

export const convertCurrencyToSign = (currency: string) => {
    switch (currency) {
        case "USD":
            return "$";
        default:
            return "not assigned";
    }
};

export const getFilteredProducts = (products: IProduct[], inputSearch: string) => {
    return products.filter(product => product.name.toLowerCase().includes(inputSearch));
};

export const getImagePath = (url: string) => apiPass + url;
