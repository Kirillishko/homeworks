import React, {ChangeEvent, useEffect, useState} from "react";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/variables.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import {getItems} from "./api/api";
import IProduct from "IProduct";
import useDebounce from "./hooks/useDebounce";
import {Route, Routes} from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";

const App = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [products, setProducts] = useState<IProduct[]>([]);

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchInput(value);
    };

    const filterProducts = () => {
        const filter = searchInput.toLowerCase();
        getItems().then((products) => {
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filter));
            setProducts(filteredProducts);
        });
    };

    const searchDebounce = useDebounce(filterProducts, 1000);
    useEffect(searchDebounce, [searchInput]);

    return (
        <>
            <Header searchInputHandler={onSearchInputChange} />
            <main >
                <Routes >
                    <Route path="/" element={<ProductList products={products} />} />
                    <Route path="products/:id" element={<ProductPage />} />
                </Routes >
            </main >
        </>
    );
};

export default App;
