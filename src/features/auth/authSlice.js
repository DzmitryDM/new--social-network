import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { securityAPI } from "../../components/api/api";

export const setAuth = createAsyncThunk(
	"auth/setAuth",
	async (_, { rejectWithValue, dispatch }) => {
	const response=await axios
			.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
				withCredentials: true,
			})
			
				if (response.data.resultCode === 0) {
              
				dispatch(setUserLoginAc(response.data.data.login))
				dispatch(setUserEmailAc(response.data.data.email))
				dispatch(setUserIdAc(response.data.data.id))
				dispatch(setUserIsAuthAc(response.data.data.isAuth))
					
				}
			
	}
);

export const setLogin = createAsyncThunk(
	"auth/setAuthLogin",
	async ({ email, password, rememberMe,captcha }, { dispatch }) => {
		const response = await axios.post(
			"https://social-network.samuraijs.com/api/1.0/auth/login",
			{ email, password, rememberMe, captcha},
			{ withCredentials: true }
		);
    
		if (response.data.resultCode === 0) {
			dispatch(setAuth());
		}else if(response.data.resultCode===10){
         dispatch(getCaptchaUrl())
      }
	}
);

export const setLogout = createAsyncThunk(
	"auth/setAuthLogout",
	async (_, { dispatch }) => {
	const response =	await axios
			.delete("https://social-network.samuraijs.com/api/1.0/auth/login",{withCredentials:true})
			
				if (response.data.resultCode === 0) {
            dispatch(setUserLoginAc(null))
				dispatch(setUserEmailAc(null))
				dispatch(setUserIdAc(null))
				dispatch(setUserIsAuthAc(false))
				}

	}
);
export const getCaptchaUrl = createAsyncThunk(
	"auth/getCaptchaUrl",
	async (_, { dispatch }) => {
	const response =	await securityAPI.getCaptchaUrll()
const captchaUrl= response.data.url
dispatch(setCaptchaUrl(captchaUrl))
	}
);

const initialState = {
	login: null,
	email: null,
	id: null,
	isAuth: false,
   captchaUrl:null
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUserIdAc: (state, action) => {

			state.id = action.payload;
					
		},
		setUserEmailAc: (state, action) => {

			state.email = action.payload;

		},
		setUserLoginAc: (state, action) => {
			state.login = action.payload;
			
		},
		setUserIsAuthAc: (state) => {
		
			state.isAuth=true
		},
		setCaptchaUrl: (state,action) => {
		
			state.captchaUrl =action.payload
		},
	}
});

export const {
	setUserIdAc,
	setUserEmailAc,
	setUserLoginAc,
	setUserIsAuthAc,
	setCaptchaUrl
} = authSlice.actions;

export default authSlice.reducer;



export const selectLogins = state => state.auth.login
export const selectIsAuth = state => state.auth.isAuth
