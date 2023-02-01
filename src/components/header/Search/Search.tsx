import { InputBase } from '@mui/material';
import React from 'react';
import { CustomSearch, SearchIconWrapper } from './style';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <CustomSearch>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <InputBase sx={{ pl: 4 }} placeholder='Search' />
        </CustomSearch>
    );
};

export default Search;
