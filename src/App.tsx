import React from "react";
import "./styles/globals.css";
import "./styles/reset.css";
import "./styles/variables.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import { useAppSelector } from "./hooks/redux";
import * as errorSelectors from "./store/selectors/ErrorSelectors";
import ErrorModal from "./components/Modal/ErrorModal";

const App = () => {

    const error = useAppSelector(errorSelectors.error);

    const errorRender = () => {
        if (error) {
            return <ErrorModal title={"Ошибка"} description={error} />;
        }
    };

    return (
        <>
            <main >
                {errorRender()}
                <Routes >
                    <Route path="/" element={<ProductListPage />} />
                    <Route path="products/:id" element={<ProductPage />} />
                </Routes >
            </main >
        </>
    );
};

export default App;
