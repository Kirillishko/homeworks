import React, { ChangeEvent } from "react";
import styles from "./header.module.css";
import { ReactComponent as SearchIconComponent } from "../../icons/search.svg";
import ShoppingCartIcon from "../../icons/shopping_cart.svg";
import AccountIcon from "../../icons/account_circle.svg";
import HomeIcon from "../../icons/home1.svg";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { headerSearchInputSlice } from "../../store/reducers/HeaderSearchInputSlice";

interface HeaderProps {
    setSearchInput?: (value: React.SetStateAction<string>) => void;
}

const Header: React.FC<HeaderProps> = () => {
    const { updateValue } = headerSearchInputSlice.actions;
    const dispatch = useAppDispatch();

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase().trim();
        dispatch(updateValue(value));
    };

    return (
        <header className={styles.header} >
            <form className={styles.searchForm} >
                <button className={styles.searchButton} >
                    <SearchIconComponent />
                </button >
                <input className={styles.searchInput} placeholder="Search products" type="search"
                       onChange={onSearchInputChange} />
            </form >
            <nav >
                <a href="#" ><img alt="Cart" src={ShoppingCartIcon} /></a >
                <a href="#" ><img alt="Account" src={AccountIcon} /></a >
                <Link to={"/"} ><img alt="Account" src={HomeIcon} width={"24px"} height={"24px"} /></Link >
            </nav >
        </header >
    );
};

export default Header;