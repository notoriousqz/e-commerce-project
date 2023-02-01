import React, { SyntheticEvent, useState } from 'react';
import { Tabs } from '@mui/material';
import { Stack } from '@mui/system';
import { StyledIconShoppping, StyledIconUser, StyledTab } from './styles';
import { useNavigate } from 'react-router-dom';
import { routingPages } from '../../../routes/enums';

const Icons = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Stack>
            <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{
                    style: { display: 'none' },
                }}
            >
                <StyledTab
                    onClick={e => navigate(`${routingPages.cart}`)}
                    icon={<StyledIconShoppping />}
                />
                <StyledTab
                    onClick={e => navigate(`${routingPages.profile}`)}
                    icon={<StyledIconUser />}
                />
            </Tabs>
        </Stack>
    );
};

export default Icons;
