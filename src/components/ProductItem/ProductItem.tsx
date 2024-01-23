import React, { useState } from "react";
import IProduct from "IProduct";
import { convertCurrencyToSign } from "../../helpers";
import { getImagePath } from "../../api/api";
import styles from "./productItem.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as FavoriteIconComponent } from "../../icons/favorite.svg";
import { ReactComponent as FavoriteActiveIconComponent } from "../../icons/favorite_active.svg";

interface ProductProps {
    product: IProduct;
}

const ProductItem: React.FC<ProductProps> = ({product}) => {
    const {id, like, picture, name, price} = product;
    const priceWithSign = convertCurrencyToSign(price.currency) + price.value;

    const [likeCheck, setLikeCheck] = useState(like);

    return (
        <figure className={styles.card} >
            <label className={styles.favorite} >
                <input type="checkbox" checked={likeCheck} onChange={() => setLikeCheck(prevState => !prevState)} />
                <FavoriteIconComponent className={styles.favoriteIcon} />
                <FavoriteActiveIconComponent className={styles.favoriteActiveIcon} />
            </label >
            <Link to={`products/${id}`} ><img alt={picture.alt} src={getImagePath(picture.path)} /></Link >
            <figcaption className={styles.info} >
                <h2 >
                    <Link to={`products/${id}`} >{name}</Link >
                </h2 >
                <p >{priceWithSign}</p >
            </figcaption >
        </figure >
    );
};

export default ProductItem;