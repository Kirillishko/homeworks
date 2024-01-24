import React, { useEffect, useState } from "react";
import useDataLoader from "../../hooks/useDataLoader";
import Loader from "../../components/Loader/Loader";
import ErrorModal from "../../components/Modal/ErrorModal";
import ProductList from "../../components/ProductList/ProductList";
import { getFilteredProducts } from "../../helpers";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import Header from "../../components/Header/Header";
import IProduct from "IProduct";

const SEARCH_DELAY = 1000;
const ProductListPage: React.FC = () => {

    const [searchInput, setSearchInput] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>();
    const {isLoading, error, data} = useDataLoader();
    const filter = useDebouncedValue(searchInput, SEARCH_DELAY);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            setFilteredProducts(getFilteredProducts(data, filter));
        }
    }, [data, filter]);

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorModal title={"Ошибка"} description={error} />;
    }

    return filteredProducts && filteredProducts.length > 0 ? (
        <>
            <Header setSearchInput={setSearchInput} />
            <ProductList products={filteredProducts} />
        </>
    ) : (
        <>
            <Header setSearchInput={setSearchInput} />
            <div >К сожалению, список пуст!</div >
        </>
    );
};


export default ProductListPage;