import styled from '@emotion/styled';

export const SearchIconWrapper = styled('div')({
    color: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
});

export const CustomSearch = styled('div')({
    display: 'flex',
    position: 'relative',
    border: '1px solid lightgrey',
    borderRadius: '10px',
    width: 'auto',
    // minWidth: 250,
    height: '50%',
    padding: '0 10px',
    marginRight: 10,
});
