import React, {useEffect, useState} from "react";
import IProduct from "IProduct";
import {useParams} from "react-router-dom";
import {getItem} from "../../api/api";
import Product from "../Product/Product";

const ProductPage = () => {
    const [product, setProduct] = useState<IProduct>();
    const {id} = useParams();

    useEffect(() => {
        getItem(id as string).then(product => setProduct(product));
    }, []);

    return (
        product ? <Product product={product} /> : <p >Loading...</p >
    );
};

export default ProductPage;