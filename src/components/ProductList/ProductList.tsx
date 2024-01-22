import React from "react";
import IProduct from "IProduct";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./productList.module.css";
import Loader from "../Loader/Loader";

interface ProductListProps {
    products: IProduct[],
}

const ProductList = ({products}: ProductListProps) => {

    return (
        products.length > 0 ? (
            <div className={styles.container} >
                {products.map(product =>
                    <ProductItem key={product.id} product={product} />
                )}
            </div >
        ) : (
            <Loader />
        )
    );
};
export default ProductList;