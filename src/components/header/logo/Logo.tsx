import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routingPages } from '../../../routes/enums';
import { LogoTypography } from './style';

const Logo = () => {
    const navigate = useNavigate();

    return (
        <>
            <LogoTypography
                onClick={e => navigate(`${routingPages.main}`)}
                variant='h5'
            >
                LOGO
            </LogoTypography>
        </>
    );
};

export default Logo;
