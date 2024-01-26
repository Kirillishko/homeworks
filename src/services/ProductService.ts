import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IProduct from "IProduct";
import { apiPass } from "../api";

export const productService = createApi({
    reducerPath: "productService",
    baseQuery: fetchBaseQuery({ baseUrl: apiPass }),
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProduct[], null>({
            query: () => ({
                url: "/item",
            }),
            transformResponse: (rawResult: { content: IProduct[] }) => {
                return rawResult.content;
            }
        }),
        fetchProductById: build.query<IProduct, string>({
            query: (id: string) => ({
                url: `/item/${id}`,
            }),
            transformResponse: (rawResult: { content: IProduct }) => {
                return rawResult.content;
            },
        }),
    })
});

export const { useFetchAllProductsQuery, useFetchProductByIdQuery } = productService;