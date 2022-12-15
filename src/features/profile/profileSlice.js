import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setProfile = createAsyncThunk(
	"profile/setProfile",

	async (id, { rejectWithValue, dispatch }) => {

	const response=	await axios

			.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
			
            
				dispatch(setUserProfileAc(response.data));
			
	}
);

export const setStatus = createAsyncThunk(
	"profile/setStatus",
	async (id, { dispatch }) => {
	const response=	await axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${id}`)
			
				dispatch(setStatusProfile(response.data));
			
	}
);

export const updateStatus = createAsyncThunk(
	"profile/updateStatus",
	async (status, { rejectWithValue,dispatch }) => {
		const response= await axios
			.put('https://social-network.samuraijs.com/api/1.0/profile/status',{
				status:status
			},{withCredentials: true})
			
				if (response.data.resultCode === 0) {
				dispatch(setStatusProfile(status));
				}
			
	}
);

const profileSlice = createSlice({
	name: "profile",
	initialState: {
		dialog: [
			{ id: 1, message: "How are your" },
			{ id: 2, message: "How old are you" },
			{ id: 3, message: "Please up" },
			{ id: 4, message: "Nice you me you " },
		],
	},
	profile: {},
	status: "",
   pro:'aaaa',

	reducers: {
		addPostActionCreator: (state, action) => {
			let newPostMessages = {
				id: 5,
				message: action.payload,
			};
			state.dialog.push(newPostMessages);
			
		},
		setUserProfileAc: (state, action) => {
			state.profile = action.payload;
		},
		setStatusProfile: (state, action) => {
			state.status = action.payload;
		},
	},

});

export const {
	addPostActionCreator,
	updatePostActionCreator,
	setUserProfileAc,
	setMyProfileAc,
	setStatusProfile,
} = profileSlice.actions;
export default profileSlice.reducer;
