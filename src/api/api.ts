import {apiPass, HttpClient} from "./HttpClient";
import IProduct from "IProduct";

const getData = async (url: string) => {
    const response = await HttpClient.get(url);
    return response.data.content;
};

export const getItems = (): Promise<IProduct[]> => getData("/item");

export const getItem = (itemId: string): Promise<IProduct> => getData(`/item/${itemId}`);

export const getImagePath = (url: string) => apiPass + url;
