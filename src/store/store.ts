import {configureStore} from '@reduxjs/toolkit'
import AuthSliceReducer from "./AuthSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch