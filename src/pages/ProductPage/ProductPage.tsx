import React from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../api/api";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader/Loader";
import useDataLoader from "../../hooks/useDataLoader";
import ErrorModal from "../../components/Modal/ErrorModal";

const ProductPage: React.FC = () => {
    const {id} = useParams();

    const {isLoading, error, data} = useDataLoader(() => getItem(id!), null);

    if (error) {
        return <ErrorModal title={"Ошибка"} description={error} />;
    }

    if (isLoading) {
        return <Loader />;
    }

    return (
        data ? (
            <Product product={data} />
        ) : (
            <ErrorModal title={"Ошибка"} description={"Нет данных!"} />
        )
    );
};

export default ProductPage;