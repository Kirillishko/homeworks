import React, { useMemo, useState } from "react";
import useData from "../../hooks/useData";
import Loader from "../../components/Loader/Loader";
import ErrorModal from "../../components/Modal/ErrorModal";
import ProductList from "../../components/ProductList/ProductList";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import Header from "../../components/Header/Header";
import { getFilteredProducts } from "../../helpers";
import { getItems } from "../../api/api";
import NotFound from "../../components/NotFound/NotFound";

const SEARCH_DELAY = 1000;
const ProductListPage: React.FC = () => {

    const [searchInput, setSearchInput] = useState<string>("");
    const {isLoading, error, data} = useData(getItems);
    const debouncedValue = useDebouncedValue(searchInput, SEARCH_DELAY);

    const filteredProducts = useMemo(() => {
        if (data && Array.isArray(data)) {
            return getFilteredProducts(data, debouncedValue);
        }

        return null;
    }, [data, debouncedValue]);

    return (
        <>
            <Header setSearchInput={setSearchInput} />
            {isLoading && <Loader />}
            {error && <ErrorModal title={"Ошибка"} description={error} />}
            {filteredProducts && filteredProducts.length > 0 && <ProductList products={filteredProducts} />}
            {(!filteredProducts || filteredProducts.length === 0) && !isLoading &&
                <NotFound text={"К сожалению, список пуст!"} />}
        </>
    );
};


export default ProductListPage;