import React, { ChangeEvent, FC } from "react";
import { ReactComponent as SearchIconComponent } from "../../assets/icons/search.svg";
import { FormControl, Input, InputAdornment } from "@mui/material";

interface SearchInputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const SearchInput: FC<SearchInputProps> = ({ onChange }) => {

    return (
        <FormControl variant="standard" color={"primary"}>
            <Input
                placeholder={"Search products"}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIconComponent style={{ fill: "#000" }}/>
                    </InputAdornment>
                }
                onChange={onChange}
            />
        </FormControl>
    );
};


export default SearchInput;