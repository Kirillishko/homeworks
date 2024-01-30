import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductPage from '../pages/ProductPage/ProductPage';
import ProductListPage from '../pages/ProductListPage/ProductListPage';
import { useAppSelector } from '../hooks/redux';
import * as errorSelectors from '../store/selectors/ErrorSelectors';
import ErrorModal from './ErrorModal/ErrorModal';
import Header from './Header/Header';

const App = () => {
    const error = useAppSelector(errorSelectors.error);

    return (
        <>
            <Header/>
            <main>
                {error ? <ErrorModal title={'Ошибка'} description={error}/> : <></>}
                <Routes>
                    <Route path="/" element={<ProductListPage/>}/>
                    <Route path="products/:id" element={<ProductPage/>}/>
                </Routes>
            </main>
        </>
    );
};

export default App;
