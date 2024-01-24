import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader/Loader";
import useDataLoader from "../../hooks/useDataLoader";
import ErrorModal from "../../components/Modal/ErrorModal";
import Header from "../../components/Header/Header";

const ProductPage: React.FC = () => {
    const {id} = useParams();

    const {isLoading, error, data} = useDataLoader(id);

    if (error) {
        return <ErrorModal title={"Ошибка"} description={error} />;
    }

    if (isLoading) {
        return <Loader />;
    }

    return data && !Array.isArray(data) ? (
        <>
            <Header />
            <Product product={data} />
        </>
    ) : (
        <>
            <Header />
            <div >К сожалению, товар не найден</div >
        </>
    );
};

export default ProductPage;