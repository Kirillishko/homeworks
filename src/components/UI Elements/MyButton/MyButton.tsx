import React, { FC } from "react";
import { Button, ButtonOwnProps, SxProps, Theme } from "@mui/material";

const style: SxProps<Theme> = {
    borderRadius: "10px"
};

interface MyButtonProps {
    text: string,
    color: ButtonOwnProps["color"],
    onClick?: () => void
}

const MyButton: FC<MyButtonProps> = ({ text, color, onClick }) => {

    return (
        <Button variant="contained" color={color} onClick={onClick} sx={style}>
            {text}
        </Button>
    );
};


export default MyButton;