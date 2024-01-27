import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: "20vh",
    boxShadow: 24,
    p: 2,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
};

interface ErrorModalProps {
    title: string,
    description: string
}

const ErrorModal: React.FC<ErrorModalProps> = ({ title, description }) => {
    const [active, setActive] = useState<boolean>(true);
    const onClose = () => setActive(prevState => !prevState);

    return (
        <Modal
            open={active}
            onClose={onClose}
        >
            <Box sx={style} >
                <Typography variant="h6" component="h2" >
                    {title}
                </Typography >
                <Typography variant="body1" component="h3" >
                    {description}
                </Typography >
                <Button variant="text" color={"primary"} onClick={onClose} >Закрыть</Button >
            </Box >
        </Modal >
    );
};


export default ErrorModal;