import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader/Loader";
import ErrorModal from "../../components/Modal/ErrorModal";
import Header from "../../components/Header/Header";
import NotFound from "../../components/NotFound/NotFound";
import { useFetchProductByIdQuery } from "../../services/ProductService";
import { getErrorMessage } from "../../helpers";

const ProductPage: React.FC = () => {
    const {id} = useParams();
    const {isLoading, error, data} = useFetchProductByIdQuery(id!, {skip: !id});

    return (
        <>
            <Header />
            {isLoading && <Loader />}
            {error && <ErrorModal title={"Ошибка"} description={getErrorMessage(error)} />}
            {data && !Array.isArray(data) && <Product product={data} />}
            {!data && !isLoading && <NotFound text={"К сожалению, товар не найден!"} />}
        </>
    );
};

export default ProductPage;