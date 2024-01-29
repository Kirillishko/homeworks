import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#e97f03',
            dark: '#d76903',
            contrastText: '#fff'
        },
        secondary: {
            main: '#fff',
            dark: '#dcdcdc',
            contrastText: '#323232',
        },
        background: {
            default: '#fff'
        }
    },
});