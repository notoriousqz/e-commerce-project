import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2D74FF',
            dark: '#1156DB',
            light: '#568FFF',
            contrastText: '#D5E3FF',
        },
        secondary: {
            main: '#FA4A69',
            dark: '#E31F43',
            light: '#FB6E87',
            contrastText: '#17181F',
        },
    },
});

export default theme;
