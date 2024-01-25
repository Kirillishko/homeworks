import React, { useMemo, useState } from "react";
import useData from "../../hooks/useData";
import Loader from "../../components/Loader/Loader";
import ErrorModal from "../../components/Modal/ErrorModal";
import ProductList from "../../components/ProductList/ProductList";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import Header from "../../components/Header/Header";
import { getFilteredProducts } from "../../helpers";

const SEARCH_DELAY = 1000;
const ProductListPage: React.FC = () => {

    const [searchInput, setSearchInput] = useState<string>("");
    const {isLoading, error, data} = useData(null);
    const debouncedValue = useDebouncedValue(searchInput, SEARCH_DELAY);

    const filteredProducts = useMemo(() => {
        if (data && Array.isArray(data)) {
            return getFilteredProducts(data, debouncedValue);
        }

        return null;
    }, [data, debouncedValue]);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorModal title={"Ошибка"} description={error} />;
    }

    return (
        <>
            <Header setSearchInput={setSearchInput} />
            {filteredProducts && filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <div >К сожалению, список пуст!</div >
            )}
        </>
    );

    // return filteredProducts && filteredProducts.length > 0 ? (
    //     <>
    //         <Header setSearchInput={setSearchInput} />
    //         <ProductList products={filteredProducts} />
    //     </>
    // ) : (
    //     <>
    //         <Header setSearchInput={setSearchInput} />
    //         <div >К сожалению, список пуст!</div >
    //     </>
    // );
};


export default ProductListPage;