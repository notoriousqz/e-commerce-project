import styled from '@emotion/styled';
import { AppBar, Box, Toolbar } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
    boxShadow: 'none',
});

export const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #F0F0F0',
});

export const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
});
