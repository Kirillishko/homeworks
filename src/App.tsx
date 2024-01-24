import React from "react";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/variables.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

const App = () => {

    return (
        <>
            <main >
                <Routes >
                    <Route path="/" element={<ProductListPage />} />
                    <Route path="products/:id" element={<ProductPage />} />
                </Routes >
            </main >
        </>
    );
};

export default App;
