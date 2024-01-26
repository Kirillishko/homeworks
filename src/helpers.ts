import IProduct from "IProduct";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { apiPass } from "./api";

const isFetchBaseQueryError = (
    error: unknown
): error is FetchBaseQueryError => {
    return typeof error === "object" && error != null && "status" in error;
};

const isErrorWithMessage = (
    error: unknown
): error is { message: string } => {
    return (
        typeof error === "object" &&
        error != null &&
        "message" in error &&
        typeof (error as any).message === "string"
    );
};

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

export const getErrorMessage = (error: unknown): string => {
    if (isFetchBaseQueryError(error)) {
        return "error" in error ? error.error : JSON.stringify(error.data);
    } else if (isErrorWithMessage(error)) {
        return error.message;
    }

    return "unknown error";
};

export const getImagePath = (url: string) => apiPass + url;
