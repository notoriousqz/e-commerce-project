import { Tabs } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { navItems } from '../constants';
import { StyledNavTab } from './style';

const Navigation = () => {
    const [value, setValue] = useState(0);

    const handleClickActive = (
        event: React.SyntheticEvent,
        newValue: number
    ) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs
                textColor='inherit'
                TabIndicatorProps={{
                    style: { display: 'none' },
                }}
                value={value}
                onChange={handleClickActive}
            >
                {navItems.map(page => (
                    <StyledNavTab label={page} key={page} />
                ))}
            </Tabs>
        </Box>
    );
};

export default Navigation;
