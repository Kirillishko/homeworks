import React, { FC } from 'react';
import { Button, SxProps, Theme } from '@mui/material';

export const enum Colors {
    Primary = 'primary',
    Secondary = 'secondary'
}

const style: SxProps<Theme> = {
    borderRadius: '10px'
};

interface BaseButtonProps {
    text: string,
    color: Colors,
    onClick?: () => void
}

const BaseButton: FC<BaseButtonProps> = ({ text, color, onClick }) => {

    return (
        <Button variant="contained" color={color} onClick={onClick} sx={style}>
            {text}
        </Button>
    );
};


export default BaseButton;