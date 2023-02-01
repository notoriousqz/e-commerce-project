import {
    configureStore,
    ThunkAction,
    Action,
    createSlice,
} from '@reduxjs/toolkit';

/////////  MOCK /////////
const MockSlice = createSlice({
    name: 'mock',
    initialState: 'light',
    reducers: {},
});
/////////////////////////////////////

export const store = configureStore({
    reducer: {
        mock: MockSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
