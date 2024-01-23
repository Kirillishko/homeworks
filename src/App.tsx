import React, { useState } from "react";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/variables.css";
import Header from "./components/Header/Header";
import { getItems } from "./api/api";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import useDataLoader from "./hooks/useDataLoader";
import { getFilteredProducts } from "./helpers";
import useDebouncedValue from "./hooks/useDebouncedValue";
import ProductList from "./components/ProductList/ProductList";

const SEARCH_DELAY = 1000;
const App = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const {isLoading, data} = useDataLoader(getItems, []);
    const filteredProducts = useDebouncedValue(data, getFilteredProducts(data, searchInput), SEARCH_DELAY);

    return (
        <>
            <Header setSearchInput={setSearchInput} />
            <main >
                <Routes >
                    <Route path="/" element={<ProductList isLoading={isLoading} products={filteredProducts} />} />
                    <Route path="products/:id" element={<ProductPage />} />
                </Routes >
            </main >
        </>
    );
};

export default App;
