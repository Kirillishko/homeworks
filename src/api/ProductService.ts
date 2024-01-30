import { createApi } from '@reduxjs/toolkit/query/react';
import IProduct from 'IProduct';
import { baseQueryWithErrorProcessing } from './Query';

export const productService = createApi({
    reducerPath: 'productService',
    baseQuery: baseQueryWithErrorProcessing,
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProduct[], void>({
            query: () => ({
                url: '/item',
            }),
            transformResponse: (response: { content: IProduct[] }) => {
                return response.content;
            }
        }),
        fetchProductById: build.query<IProduct, string>({
            query: (id: string) => ({
                url: `/item/${id}`,
            }),
            transformResponse: (response: { content: IProduct }) => {
                return response.content;
            },
        }),
    })
});

export const { useFetchAllProductsQuery, useFetchProductByIdQuery } = productService;