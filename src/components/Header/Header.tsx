import React, { ChangeEvent } from "react";
import styles from "./Header.module.css";
import ShoppingCartIcon from "../../assets/icons/shopping_cart.svg";
import AccountIcon from "../../assets/icons/account_circle.svg";
import HomeIcon from "../../assets/icons/home1.svg";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { headerSearchInputSlice } from "../../store/reducers/HeaderSearchInputSlice";
import SearchInput from "../SearchInput/SearchInput";

const Header: React.FC = () => {
    const { updateValue } = headerSearchInputSlice.actions;
    const dispatch = useAppDispatch();

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase().trim();
        dispatch(updateValue(value));
    };

    return (
        <header className={styles.header}>
            <SearchInput onChange={onSearchInputChange}/>
            <nav>
                <a href="#"><img alt="Cart" src={ShoppingCartIcon}/></a>
                <a href="#"><img alt="Account" src={AccountIcon}/></a>
                <Link to={"/"}><img alt="Account" src={HomeIcon} width={"24px"} height={"24px"}/></Link>
            </nav>
        </header>
    );
};

export default Header;
