import React, { ChangeEvent, FC, useState } from "react";
import { convertCurrencyToSign, getImagePath } from "../../helpers/helpers";
import IProduct from "IProduct";
import styles from "./Product.module.css";
import { ReactComponent as FavoriteIconComponent } from "../../assets/icons/favorite.svg";
import { ReactComponent as FavoriteActiveIconComponent } from "../../assets/icons/favorite_active.svg";
import BaseButton, { Colors } from "../BaseButton/BaseButton";

interface ProductProps {
    product: IProduct,
}

const MIN_COUNTER_VALUE = 1;
const Product: FC<ProductProps> = ({ product }) => {
    const { name, details, description, info, picture, price, like } = product;
    const priceWithSign = convertCurrencyToSign(price.currency) + price.value;

    const [productCount, setProductCount] = useState(MIN_COUNTER_VALUE);
    const [likeCheck, setLikeCheck] = useState(like);

    const onDecrementProductCountClick = () => {
        if (productCount > MIN_COUNTER_VALUE) {
            setProductCount(prevState => prevState - 1);
        }
    };

    const onIncrementProductCountClick = () => {
        setProductCount(prevState => prevState + 1);
    };

    const onCounterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const counterValue = Math.floor(+e.target.value);
        setProductCount(Math.max(counterValue, MIN_COUNTER_VALUE));
    };

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>
                <div className={styles.image}>
                    <img alt={picture.alt} src={getImagePath(picture.path)}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <h2>{name}</h2>
                        <p>{description}. {info}</p>
                    </div>
                    <div className={styles.text}>
                        <h3>Детали</h3>
                        <p>{details}</p>
                    </div>
                    <div className={styles.buttons}>
                        <h1>{priceWithSign}</h1>
                        <form className={styles.productCountForm} onSubmit={e => e.preventDefault()}>
                            <input type="button" value="—" onClick={onDecrementProductCountClick}/>
                            <input type="number" value={productCount} onChange={onCounterChange}/>
                            <input type="button" value="+" onClick={onIncrementProductCountClick}/>
                        </form>
                        <BaseButton text={"Add to cart"} color={Colors.primary}/>
                        <label className={styles.favorite}>
                            <input type="checkbox" checked={likeCheck}
                                   onChange={() => setLikeCheck(prevState => !prevState)}/>
                            <FavoriteIconComponent className={styles.favoriteIcon}/>
                            <FavoriteActiveIconComponent className={styles.favoriteActiveIcon}/>
                        </label>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Product;