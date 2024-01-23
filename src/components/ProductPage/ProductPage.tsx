import React from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../api/api";
import Product from "../Product/Product";
import Loader from "../Loader/Loader";
import useDataLoader from "../../hooks/useDataLoader";
import ErrorModal from "../Modal/ErrorModal";

const ProductPage: React.FC = () => {
    const {id} = useParams();

    const {isLoading, error, data} = useDataLoader(() => getItem(id!), null);

    if (error) {
        return <ErrorModal title={"Ошибка"} description={error} />;
    }

    return (
        isLoading ? (
            <Loader />
        ) : (
            <Product product={data!} />
        )
    );
};

export default ProductPage;