import React, { ChangeEvent } from "react";
import styles from "./Header.module.css";
import ShoppingCartIcon from "../../icons/shopping_cart.svg";
import AccountIcon from "../../icons/account_circle.svg";
import HomeIcon from "../../icons/home1.svg";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { headerSearchInputSlice } from "../../store/reducers/HeaderSearchInputSlice";
import MySearchInput from "../UI Elements/MyButton/MySearchInput";

const Header: React.FC = () => {
    const { updateValue } = headerSearchInputSlice.actions;
    const dispatch = useAppDispatch();

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase().trim();
        dispatch(updateValue(value));
    };

    return (
        <header className={styles.header}>
            <MySearchInput onChange={onSearchInputChange}/>
            <nav>
                <a href="#"><img alt="Cart" src={ShoppingCartIcon}/></a>
                <a href="#"><img alt="Account" src={AccountIcon}/></a>
                <Link to={"/"}><img alt="Account" src={HomeIcon} width={"24px"} height={"24px"}/></Link>
            </nav>
        </header>
    );
};

export default Header;
