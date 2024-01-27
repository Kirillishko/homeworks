import React from "react";
import IProduct from "IProduct";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./productList.module.css";
import NotFound from "../NotFound/NotFound";

interface ProductListProps {
    products: IProduct[],
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

    return (
        products.length > 0 ? (
            <div className={styles.container} >
                {products.map(product =>
                    <ProductItem key={product.id} product={product} />
                )}
            </div >
        ) : (
            <NotFound text={"К сожалению, список пуст!"} />
        )
    );
};
export default ProductList;