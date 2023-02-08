import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

interface Item {
    item: {
        name: string;
        items: Array<string>;
    };
}

export const GetHelpList = ({ item }: Item) => {
    return (
        <Box>
            <Box sx={{ ml: 5, color: '#FFF' }}>{item.name}</Box>
            <List sx={{ ml: 3 }}>
                {item.items.map(item => (
                    <ListItem key={item} sx={{ height: 30, color: 'grey' }}>
                        <ListItemText
                            key={item}
                            sx={{ fontSize: '18px' }}
                            primary={item}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
export const LegalsList = ({ item }: Item) => {
    return (
        <Box>
            <Box sx={{ ml: -2, color: '#FFF' }}>{item.name}</Box>
            <List sx={{ ml: -4 }}>
                {item.items.map(item => (
                    <ListItem key={item} sx={{ height: 30, color: 'grey' }}>
                        <ListItemText
                            key={item}
                            sx={{ fontSize: '18px' }}
                            primary={item}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
