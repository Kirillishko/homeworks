import type { BaseQueryFn, FetchArgs, FetchBaseQueryError, } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { errorSlice } from "../store/reducers/ErrorSlice";

export const apiPass = "http://localhost:3006";
const baseQuery = fetchBaseQuery({ baseUrl: apiPass });
const { setValue } = errorSlice.actions;

export const baseQueryWithErrorProcessing: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && "error" in result.error) {
        api.dispatch(setValue(result.error.error));
    }
    return result;
};
