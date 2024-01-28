import React, { ChangeEvent, FC } from "react";
import { ReactComponent as SearchIconComponent } from "../../../icons/search.svg";
import { FormControl, Input, InputAdornment } from "@mui/material";

interface MySearchInputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const MySearchInput: FC<MySearchInputProps> = ({ onChange }) => {

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


export default MySearchInput;