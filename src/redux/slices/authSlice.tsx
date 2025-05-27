import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
	user: { name: string } | null;
	isLoggedIn: boolean;
}

const initialState: AuthState = {
	user: null,
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state: any, action: PayloadAction<{ name: string }>) {
			state.user = action.payload;
			state.isLoggedIn = true;
		},
	},
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
