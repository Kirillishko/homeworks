import React from "react";
import "./assets/styles/globals.css";
import "./assets/styles/reset.css";
import "./assets/styles/variables.css";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import { useAppSelector } from "./hooks/redux";
import * as errorSelectors from "./store/selectors/ErrorSelectors";
import ErrorModal from "./components/ErrorModal/ErrorModal";

const App = () => {
    const error = useAppSelector(errorSelectors.error);

    return (
        <>
            <main>
                {error ? <ErrorModal title={"Ошибка"} description={error}/> : <></>}
                <Routes>
                    <Route path="/" element={<ProductListPage/>}/>
                    <Route path="products/:id" element={<ProductPage/>}/>
                </Routes>
            </main>
        </>
    );
};

export default App;
