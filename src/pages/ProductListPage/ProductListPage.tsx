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
import * as headerSearchInputSelectors from "../../store/selectors/HeaderSearchInputSelectors";

const SEARCH_DELAY = 1000;
const ProductListPage: React.FC = () => {
    const { isLoading, error, data } = useFetchAllProductsQuery(null);
    const searchInput = useAppSelector(headerSearchInputSelectors.searchInput);
    const debouncedValue = useDebouncedValue(searchInput, SEARCH_DELAY);

    const filteredProducts = useMemo(() => {
        if (data) {
            return getFilteredProducts(data, debouncedValue);
        }

        return [];
    }, [data, debouncedValue]);


    return (
        <>
            <Header />
            {isLoading && <Loader />}
            {error && <ErrorModal title={"Ошибка"} description={getErrorMessage(error)} />}
            {filteredProducts.length > 0 && <ProductList products={filteredProducts} />}
            {filteredProducts.length === 0 && !isLoading &&
                <NotFound text={"К сожалению, список пуст!"} />}
        </>
    );
};


export default ProductListPage;