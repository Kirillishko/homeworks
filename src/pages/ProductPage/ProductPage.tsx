import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader/Loader";
import useData from "../../hooks/useData";
import ErrorModal from "../../components/Modal/ErrorModal";
import Header from "../../components/Header/Header";
import { getItem } from "../../api/api";
import NotFound from "../../components/NotFound/NotFound";

const ProductPage: React.FC = () => {
    const {id} = useParams();

    const getById = useCallback(() => {
        return getItem(id!);
    }, [id]);

    const {isLoading, error, data} = useData(id ? getById : null);

    return (
        <>
            <Header />
            {isLoading && <Loader />}
            {error && <ErrorModal title={"Ошибка"} description={error} />}
            {data && !Array.isArray(data) && <Product product={data} />}
            {!data && !isLoading && <NotFound text={"К сожалению, товар не найден!"} />}
        </>
    );
};

export default ProductPage;