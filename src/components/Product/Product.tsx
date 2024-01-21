import React, {ChangeEvent, useState} from "react";
import {convertCurrencyToSign} from "../../helpers";
import {getImagePath} from "../../api/api";
import IProduct from "IProduct";
import styles from "./product.module.css";

interface ProductProps {
    product: IProduct,
}

const Product = ({product}: ProductProps) => {
    const minCounterValue = 1;
    const {name, details, description, info, picture, price, like} = product;
    const priceWithSign = convertCurrencyToSign(price.currency) + price.value;
    const imagePath = getImagePath(picture.path);

    const [productCount, setProductCount] = useState(1);
    const [likeCheck, setLikeCheck] = useState(like);

    const onDecrementProductCountClick = () => {
        if (productCount > minCounterValue) {
            setProductCount(prevState => prevState - 1);
        }
    };

    const onIncrementProductCountClick = () => {
        setProductCount(prevState => prevState + 1);
    };

    const onCounterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const counterValue = Math.floor(+e.target.value);
        setProductCount(counterValue < minCounterValue ? minCounterValue : counterValue);
    };

    return (
        <main className={styles.wrapper} >
            <section className={styles.content} >
                <div className={styles.image} >
                    <img alt={picture.alt} src={imagePath} />
                </div >
                <div className={styles.info} >
                    <div className={styles.text} >
                        <h2 >{name}</h2 >
                        <p >{description}. {info}</p >
                    </div >
                    <div className={styles.text} >
                        <h3 >Детали</h3 >
                        <p >{details}</p >
                    </div >
                    <div className={styles.buttons} >
                        <h1 >{priceWithSign}</h1 >
                        <form className={styles.productCountForm} onSubmit={e => e.preventDefault()} >
                            <input type="button" value="—" onClick={onDecrementProductCountClick} />
                            <input type="number" value={productCount} onChange={onCounterChange} />
                            <input type="button" value="+" onClick={onIncrementProductCountClick} />
                        </form >
                        <button className={styles.cartButton} >Add to cart</button >
                        <label className={styles.favorite} >
                            <input type="checkbox" checked={likeCheck}
                                   onChange={() => setLikeCheck(prevState => !prevState)} />
                            <svg className={styles.favoriteIcon} >
                                <g clipPath="url(#clip0_2903_310)" >
                                    <path
                                        d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" />
                                </g >
                            </svg >
                            <svg className={styles.favoriteActiveIcon} >
                                <g clipPath="url(#clip0_2903_203)" >
                                    <path
                                        d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
                                </g >
                            </svg >
                        </label >
                    </div >
                </div >
            </section >
        </main >
    );
};

export default Product;