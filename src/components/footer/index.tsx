import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import { GetHelpList, LegalsList } from './noRoutes/FooterNavItems';
import {
    contactItems,
    getHelpItems,
    legalsItems,
    productsItems,
} from './constants';
import ProductsList from './routeItems/ProductsList';
import FooterIcons from './icons/FooterIcons';
import ContactList from './noRoutes/ContactList';
import { FooterLogo } from '../logo/Logo';

const Footer = () => {
    return (
        <Box bgcolor='#000' height={400}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box sx={{ mt: 5, ml: 3, flexGrow: 1 }}>
                        <FooterLogo />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 5, mt: 5, flexGrow: 2 }}>
                        <ProductsList item={productsItems} />
                        <GetHelpList item={getHelpItems} />
                        <LegalsList item={legalsItems} />
                        <ContactList item={contactItems} />
                    </Box>
                </Box>
                <Container>
                    <Divider sx={{ borderColor: 'grey.800', mt: 5 }} />
                    <Container
                        sx={{
                            mx: 4,
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography sx={{ color: 'grey.500', mt: 4, ml: -7 }}>
                            Tel Ran © 2022
                        </Typography>
                        <FooterIcons />
                    </Container>
                </Container>
            </Container>
        </Box>
    );
};

export default Footer;
