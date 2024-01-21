import React from "react";
import IProduct from "IProduct";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./productList.module.css";

interface ProductListProps {
    products: IProduct[],
}

const ProductList = ({products}: ProductListProps) => {

    return (
        <div className={styles.container} >
            {products.map(product =>
                <ProductItem key={product.id} product={product} />
            )}
        </div >
    );
};
export default ProductList;