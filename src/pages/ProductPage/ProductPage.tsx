import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader/Loader";
import Header from "../../components/Header/Header";
import NotFound from "../../components/NotFound/NotFound";
import { useFetchProductByIdQuery } from "../../services/ProductService";

const ProductPage: React.FC = () => {
    const { id } = useParams();
    const { isLoading, error, data } = useFetchProductByIdQuery(id!, { skip: !id });

    const renderContent = () => {
        if (isLoading) {
            return <Loader />;
        }

        if (data) {
            return <Product product={data} />;
        }

        return <NotFound text={"К сожалению, товар не найден!"} />;
    };

    return (
        <>
            <Header />
            {renderContent()}
        </>
    );
};

export default ProductPage;