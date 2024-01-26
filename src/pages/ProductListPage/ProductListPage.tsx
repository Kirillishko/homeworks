import React, { useMemo } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorModal from "../../components/Modal/ErrorModal";
import ProductList from "../../components/ProductList/ProductList";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import Header from "../../components/Header/Header";
import { getErrorMessage, getFilteredProducts } from "../../helpers";
import NotFound from "../../components/NotFound/NotFound";
import { useFetchAllProductsQuery } from "../../services/ProductService";
import { useAppSelector } from "../../hooks/redux";

const SEARCH_DELAY = 1000;
const ProductListPage: React.FC = () => {
    const { isLoading, error, data } = useFetchAllProductsQuery(null);
    const { searchInput } = useAppSelector(state => state.headerSearchInputSlice);
    const debouncedValue = useDebouncedValue(searchInput, SEARCH_DELAY);

    const filteredProducts = useMemo(() => {
        if (data && Array.isArray(data)) {
            return getFilteredProducts(data, debouncedValue);
        }

        return null;
    }, [data, debouncedValue]);

    return (
        <>
            <Header />
            {isLoading && <Loader />}
            {error && <ErrorModal title={"Ошибка"} description={getErrorMessage(error)} />}
            {filteredProducts && filteredProducts.length > 0 && <ProductList products={filteredProducts} />}
            {(!filteredProducts || filteredProducts.length === 0) && !isLoading &&
                <NotFound text={"К сожалению, список пуст!"} />}
        </>
    );
};


export default ProductListPage;