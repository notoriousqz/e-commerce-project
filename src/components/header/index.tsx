import React from 'react';
import { Stack } from '@mui/material';
import Navigation from './navigation/Navigation';
import Logo from './logo/Logo';
import Search from './Search/Search';
import Icons from './navIcons/Icons';
import { StyledAppBar, StyledBox, StyledToolBar } from './style';

const Header = () => {
    return (
        <StyledAppBar color='transparent' position='static'>
            <StyledToolBar>
                <StyledBox>
                    <Logo />
                    <Navigation />
                </StyledBox>
                <Stack direction='row' alignItems='center'>
                    <Search />
                    <Icons />
                </Stack>
            </StyledToolBar>
        </StyledAppBar>
    );
};

export default Header;
