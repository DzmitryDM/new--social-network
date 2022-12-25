import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance, profileAPI } from "../../components/api/api";

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
export const loadingPhoto = createAsyncThunk(
	"profile/loadingPhoto",
	async (file, { dispatch,getState }) => {
	 let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setImageProfile(response.data.data.photos))
        
    }
			
	}
);
export const saveProfile = createAsyncThunk(
	"profile/saveProfile",
	async (profile, { dispatch,getState }) => {
     const id=getState().auth.id
	 let res = await profileAPI.saveProfile(profile)

    if (res.data.resultCode === 0) {
        dispatch(setProfile(id))
    }
			
	}
);
//export const savePhotos = createAsyncThunk(
//	"profile/loadingPhoto",
//	async (file, { dispatch }) => {
//   const formdata=new FormData()
//   formdata.append("image",file)
//      const res= await instance.put(`profile/photo`,formdata, 
//  {          headers: 
//               { 'Content-Type': 'multipart/form-data'}
//            })
//            if(res.data.resultCode===0){
//               dispatch(setImageProfile(res.data.data.photos))
//            }
	 
//	}
//);

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
		setImageProfile: (state, action) => {
			state.profile=action.payload
         
		},
	},

});

export const {
	addPostActionCreator,
	updatePostActionCreator,
	setUserProfileAc,
	setMyProfileAc,
	setStatusProfile,
   setImageProfile
} = profileSlice.actions;
export default profileSlice.reducer;
