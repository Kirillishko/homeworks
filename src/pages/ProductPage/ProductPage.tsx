import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader/Loader";
import useData from "../../hooks/useData";
import ErrorModal from "../../components/Modal/ErrorModal";
import Header from "../../components/Header/Header";

const ProductPage: React.FC = () => {
    const {id} = useParams();

    const {isLoading, error, data} = useData(id);

    if (error) {
        return <ErrorModal title={"Ошибка"} description={error} />;
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Header />
            {data && !Array.isArray(data) ? (
                <Product product={data} />
            ) : (
                <div >К сожалению, список пуст!</div >
            )}
        </>
    );
};

export default ProductPage;