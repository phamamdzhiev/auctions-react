import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthUser} from "@supabase/supabase-js";

interface UserState {
    user: AuthUser | null;
}

const initialState: UserState = {
    user: null,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthUser | null>) => {
            state.user = action.payload
        }
    }
});

export const {setUser} = AuthSlice.actions;
export default AuthSlice.reducer;