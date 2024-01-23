// noinspection ConstantOnRightSideOfComparisonJS

import React from "react";
import IProduct from "IProduct";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./productList.module.css";
import Loader from "../Loader/Loader";
import ErrorModal from "../Modal/ErrorModal";

interface ProductListProps {
    products: IProduct[],
    isLoading: boolean,
}

const ProductList: React.FC<ProductListProps> = ({products, isLoading}) => {

    console.log(isLoading);

    if (isLoading) {
        return <Loader />;
    }

    return (
        products.length > 0 ? (
            <div className={styles.container} >
                {products.map(product =>
                    <ProductItem key={product.id} product={product} />
                )}
            </div >
        ) : (
            <ErrorModal title={"Ошибка"} description={"Не удалось получить список товаров"} />
        )
    );
};
export default ProductList;