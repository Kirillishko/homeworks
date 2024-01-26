import React, { useMemo } from "react";
import Loader from "../../components/Loader/Loader";
import ProductList from "../../components/ProductList/ProductList";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import Header from "../../components/Header/Header";
import { getFilteredProducts } from "../../helpers";
import { useFetchAllProductsQuery } from "../../services/ProductService";
import { useAppSelector } from "../../hooks/redux";
import * as headerSearchInputSelectors from "../../store/selectors/HeaderSearchInputSelectors";

const SEARCH_DELAY = 1000;
const ProductListPage: React.FC = () => {
    const { isLoading, data } = useFetchAllProductsQuery();
    const searchInput = useAppSelector(headerSearchInputSelectors.searchInput);
    const debouncedValue = useDebouncedValue(searchInput, SEARCH_DELAY);

    const filteredProducts = useMemo(() => {
        if (data) {
            return getFilteredProducts(data, debouncedValue);
        }

        return [];
    }, [data, debouncedValue]);

    const renderContent = () => {
        if (isLoading) {
            return <Loader />;
        }

        return <ProductList products={filteredProducts} />;
    };

    return (
        <>
            <Header />
            {renderContent()}
        </>
    );
};


export default ProductListPage;