import React from "react";
import useDataLoader from "../../hooks/useDataLoader";
import { getItems } from "../../api/api";
import Loader from "../../components/Loader/Loader";
import ErrorModal from "../../components/Modal/ErrorModal";
import ProductList from "../../components/ProductList/ProductList";
import { getFilteredProducts } from "../../helpers";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";

interface ProductListPageProps {
    searchInput: string;
}

const SEARCH_DELAY = 1000;
const ProductListPage: React.FC<ProductListPageProps> = ({searchInput}) => {
    console.log("ProductListPage");

    const {isLoading, error, data} = useDataLoader(getItems, []);
    const filteredProducts = getFilteredProducts(data, useDebouncedValue(searchInput, SEARCH_DELAY));

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorModal title={"Ошибка"} description={error} />;
    }

    return (
        data.length > 0 ? (<ProductList products={filteredProducts} />
        ) : (
            <ErrorModal title={"Ошибка"} description={"Нет данных!"} />
        )
    );
};


export default ProductListPage;