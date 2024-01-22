import React from "react";
import {useParams} from "react-router-dom";
import {getItem} from "../../api/api";
import Product from "../Product/Product";
import Loader from "../Loader/Loader";
import useApi from "../../hooks/useApi";

const ProductPage = () => {
    const {id} = useParams<{ id?: string }>();

    const [isLoading, product] = useApi(() => getItem(id!.toString()), null);

    return (
        isLoading ? (
            <Loader />
        ) : (
            <Product product={product!} />
        )
    );
};

export default ProductPage;