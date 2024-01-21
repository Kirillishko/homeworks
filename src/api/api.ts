import {HttpClient, apiPass} from "./HttpClient";
import IProduct from "IProduct";


const getData = async (url: string) => {
    const response = await HttpClient.get(url);
    return response.data.content;
};

const getItems = (): Promise<IProduct[]> => getData("/item");

const getItem = (itemId: string | number): Promise<IProduct> => getData(`/item/${itemId}`);

const getImagePath = (url: string) => apiPass + url;

export {getItems, getItem, getImagePath};
