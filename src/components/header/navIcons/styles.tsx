import { Badge, Tab } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import styled from '@emotion/styled';

export const StyledIconShoppping = () => {
    return (
        <Badge badgeContent={4} color='primary'>
            <ShoppingBagOutlinedIcon />
        </Badge>
    );
};

export const StyledIconUser = () => {
    return (
        <Badge badgeContent={4} color='primary'>
            <AccountCircleOutlinedIcon />
        </Badge>
    );
};

export const StyledTab = styled(Tab)({
    padding: 0,
    minWidth: 30,
    width: 50,
});
