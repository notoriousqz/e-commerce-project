import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routingPages } from '../../routes/enums';
import { LogoTypography } from './style';

export const HeaderLogo = () => {
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
export const FooterLogo = () => {
    const navigate = useNavigate();

    return (
        <>
            <LogoTypography
                sx={{ color: '#FFF' }}
                onClick={e => navigate(`${routingPages.main}`)}
                variant='h5'
            >
                LOGO
            </LogoTypography>
        </>
    );
};
