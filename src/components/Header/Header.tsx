import React, { ChangeEvent } from "react";
import styles from "./header.module.css";
import { ReactComponent as SearchIconComponent } from "../../icons/search.svg";
import ShoppingCartIcon from "../../icons/shopping_cart.svg";
import AccountIcon from "../../icons/account_circle.svg";
import HomeIcon from "../../icons/home1.svg";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { headerSearchInputSlice } from "../../store/reducers/HeaderSearchInputSlice";
import { FormControl, Input, InputAdornment } from "@mui/material";

const Header: React.FC = () => {
    const { updateValue } = headerSearchInputSlice.actions;
    const dispatch = useAppDispatch();

    const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase().trim();
        dispatch(updateValue(value));
    };

    return (
        <header className={styles.header} >
            <FormControl variant="standard" >
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start" sx={{ fillRule: "#369" }} >
                            <SearchIconComponent style={{ fill: "#000", }} />
                        </InputAdornment >
                    }
                    onChange={onSearchInputChange}
                />
            </FormControl >
            <nav >
                <a href="#" ><img alt="Cart" src={ShoppingCartIcon} /></a >
                <a href="#" ><img alt="Account" src={AccountIcon} /></a >
                <Link to={"/"} ><img alt="Account" src={HomeIcon} width={"24px"} height={"24px"} /></Link >
            </nav >
        </header >
    );
};

export default Header;
