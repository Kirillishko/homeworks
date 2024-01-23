import React, { useState } from "react";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/variables.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

const App = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    console.log("APP");

    return (
        <>
            <Header setSearchInput={setSearchInput} />
            <main >
                <Routes >
                    <Route path="/" element={<ProductListPage searchInput={searchInput} />} />
                    <Route path="products/:id" element={<ProductPage />} />
                </Routes >
            </main >
        </>
    );
};

export default App;
