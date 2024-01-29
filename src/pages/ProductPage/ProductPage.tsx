import React, { FC } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import NotFound from "../../components/NotFound/NotFound";
import { useFetchProductByIdQuery } from "../../api/ProductService";

const ProductPage: FC = () => {
    const { id } = useParams();
    const { isLoading, data } = useFetchProductByIdQuery(id!, { skip: !id });

    const renderContent = () => {
        if (isLoading) {
            return <Loader/>;
        }

        if (data) {
            return <Product product={data}/>;
        }

        return <NotFound text={"К сожалению, товар не найден!"}/>;
    };

    return (
        <>
            <Header/>
            {renderContent()}
        </>
    );
};

export default ProductPage;