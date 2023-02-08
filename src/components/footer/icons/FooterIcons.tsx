import React from 'react';
import { IconButton, Stack } from '@mui/material';
import { RoundedIconButton } from './StyledRoundedIcons';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterIcons = () => {
    return (
        <div>
            <Stack
                sx={{ mt: 3, mr: 1 }}
                direction='row'
                alignItems='center'
                spacing={1}
            >
                <RoundedIconButton>
                    <IconButton>
                        <FacebookOutlinedIcon
                            fontSize='small'
                            sx={{ color: '#FFF' }}
                        />
                    </IconButton>
                </RoundedIconButton>
                <RoundedIconButton>
                    <IconButton>
                        <InstagramIcon
                            fontSize='small'
                            sx={{ color: '#FFF' }}
                        />
                    </IconButton>
                </RoundedIconButton>
                <RoundedIconButton>
                    <IconButton>
                        <TwitterIcon fontSize='small' sx={{ color: '#FFF' }} />
                    </IconButton>
                </RoundedIconButton>
            </Stack>
        </div>
    );
};

export default FooterIcons;
