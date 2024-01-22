import React, {useState} from "react";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/variables.css";
import Header from "./components/Header/Header";
import {getItems} from "./api/api";
import {Route, Routes} from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import useApi from "./hooks/useApi";
import {getFilterProducts} from "./helpers";
import useDebouncedValue from "./hooks/useDebouncedValue";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
    const searchDelay = 1000;
    const [searchInput, setSearchInput] = useState<string>("");
    const [, products] = useApi(getItems, []);
    const filteredProducts = useDebouncedValue(products, getFilterProducts(products, searchInput), searchDelay);

    return (
        <>
            <Header setSearchInput={setSearchInput} />
            <main >
                <Routes >
                    <Route path="/" element={<ProductList products={filteredProducts} />} />
                    <Route path="products/:id" element={<ProductPage />} />
                </Routes >
            </main >
        </>
    );
};

export default App;
