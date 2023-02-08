import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Item {
    name: string;
    route: string;
}
interface RouteItems {
    item: {
        name: string;
        items: Array<Item>;
    };
}

const ProductsList = ({ item }: RouteItems) => {
    const navigate = useNavigate();

    return (
        <div>
            <Box>
                <Box sx={{ ml: 2, color: '#FFF' }}>{item.name}</Box>
                <List>
                    {item.items.map(item => (
                        <ListItem
                            key={item.route}
                            sx={{ height: 30, color: 'grey' }}
                        >
                            <ListItemText
                                onClick={e => navigate(`/${item.route}`)}
                                key={item.route}
                                sx={{ fontSize: '18px', cursor: 'pointer' }}
                                primary={item.name}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </div>
    );
};

export default ProductsList;
