import React from 'react';
import {
    Box,
    Link,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
} from '@mui/material';

interface Item {
    type: string;
    content: string;
}

interface ItemContact {
    item: {
        name: string;
        items: Array<Item>;
    };
}

interface ISwitch {
    type: string;
    content: string;
}

const ContactList = ({ item }: ItemContact) => {
    return (
        <div>
            <Box>
                <Box sx={{ color: '#FFF' }}>{item.name}</Box>
                {item.items.map(i => {
                    return (
                        <List
                            key={i.type}
                            subheader={
                                <ListSubheader
                                    sx={{
                                        pl: 0,
                                        fontSize: '15px',
                                        backgroundColor: 'inherit',
                                        height: 40,
                                        color: 'grey',
                                    }}
                                >
                                    {i.type}
                                </ListSubheader>
                            }
                        >
                            <ListItem sx={{ height: 20, p: 0 }}>
                                <ListItemText
                                    sx={{ color: '#FFF' }}
                                    primary={contactItemsSwitch(i)}
                                />
                            </ListItem>
                        </List>
                    );
                })}
            </Box>
        </div>
    );
};

const contactItemsSwitch = (item: ISwitch) => {
    switch (item.type) {
        case 'Phone':
            return (
                <Link underline='none' href={`tel:${item.content}`}>
                    {item.content}
                </Link>
            );
        case 'Email':
            return (
                <Link
                    underline='none'
                    sx={{ color: '#FFF' }}
                    href={`mailto:${item.content}`}
                >
                    {item.content}
                </Link>
            );
        case 'Address':
            return item.content;
    }
};

export default ContactList;
