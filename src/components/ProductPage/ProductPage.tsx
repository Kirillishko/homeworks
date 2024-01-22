import React, {useEffect, useState} from "react";
import IProduct from "IProduct";
import {useParams} from "react-router-dom";
import {getItem} from "../../api/api";
import Product from "../Product/Product";
import Loader from "../Loader/Loader";

const ProductPage = () => {
    const [product, setProduct] = useState<IProduct>();
    const {id} = useParams<{ id?: string }>();

    useEffect(() => {
        getItem(id!.toString()).then(product => setProduct(product));
    }, []);

    return (
        product ? (
            <Product product={product} />
        ) : (
            <Loader />
        )
    );
};

export default ProductPage;