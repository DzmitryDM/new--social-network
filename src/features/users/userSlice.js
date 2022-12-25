import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setUsers = createAsyncThunk(
	"users/setUsers",
	async (_, { rejectWithValue, dispatch, getState }) => {
		const page = getState().users.page;
		const pageSize = getState().users.pageSize;
		dispatch(toggleIsFetchingAc(true));
		const response = await axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`,
			{ withCredentials: true }
		);

		dispatch(toggleIsFetchingAc(false));
		dispatch(setUsersAc(response.data.items));
		dispatch(setUserTotalCountAc(response.data.totalCount));
	}
);

//===============================//

export const onPageChanged = createAsyncThunk(
	"users/onPageChanged",
	async (pageNumber, { rejectWithValue, dispatch, getState }) => {
		const pageSize = getState().users.pageSize;
		dispatch(setCurrentPageAc(pageNumber));
		dispatch(toggleIsFetchingAc(true));
		const response = await axios.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
			{ withCredentials: true }
		);

		dispatch(toggleIsFetchingAc(false));
		dispatch(setUsersAc(response.data.items));
	}
);
//====================//
export const setUnfollow = createAsyncThunk(
	"users/setUnfollow",
	async (id, { rejectWithValue, dispatch }) => {
		dispatch(toggleFollowingInProgressAc(true, id));
		const response = await axios.delete(
			`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
			{
				withCredentials: true,
				headers: {
					"API-KEY": "0990e9ce-cf5c-460d-8f8b-bba1a48ee568",
				},
			}
		);

		if (response.data.resultCode === 0) {
			dispatch(unfollowAc(id));
		}
		dispatch(toggleFollowingInProgressAc(false, id));
	}
);

//====================//
export const setFollow = createAsyncThunk(
	"users/setFollow",
	async (id, { rejectWithValue, dispatch }) => {
		dispatch(toggleFollowingInProgressAc(true, id));
		const response = await axios.post(
			`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
			{},
			{
				withCredentials: true,
				headers: {
					"API-KEY": "0990e9ce-cf5c-460d-8f8b-bba1a48ee568",
				},
			}
		);

		if (response.data.resultCode === 0) {
			dispatch(followAc(id));
		}
		dispatch(toggleFollowingInProgressAc(false, id));
	}
);
//======================//
const initialState = {
	users: [],
	pageSize: 5,
	totalItemsCount: 0,
	page: 1,
	isFetching: true,
	followingInProgress: [],
	portionSize: 10,
};
const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		followAc: (state, action) => {
			const s = state.users.find((u) => u.id === action.payload);
			s.followed = !s.followed;
		},
		unfollowAc: (state, action) => {
			const s = state.users.find((u) => u.id === action.payload);
			s.followed = !s.followed;
			//state.users.map((u) => {
			//if (u.id === action.payload) {
			//u.followed = false;
			//}
			//return u;
			//	});
		},
		setUsersAc: (state, action) => {
			state.users = action.payload;
		},
		setCurrentPageAc: (state, action) => {
			state.page = action.payload;
		},
		setUserTotalCountAc: (state, action) => {
			state.totalItemsCount = action.payload;
		},
		toggleIsFetchingAc: (state, action) => {
			state.isFetching = action.payload;
		},
		setPortionSize: (state, action) => {
			state.portionSize = action.payload;
		},
		toggleFollowingInProgressAc: (state, action) => {
			//state.followingInProgress = action.payload
				//? state.followingInProgress = action.payload
			 state.followingInProgress.filter((id) => id !== action.payload);
			// state.followingInProgress=action.payload
		},
		toggleDeleteInProgressAc: (state, action) => {
			state.isFetching = true
				? (state.followingInProgress = action.payload)
				: state.followingInProgress.filter((id) => id !== action.payload);
		},
	},
});

export const {
	followAc,
	unfollowAc,
	setUsersAc,
	setCurrentPageAc,
	setUserTotalCountAc,
	toggleIsFetchingAc,
	toggleFollowingInProgressAc,
	setPortionSize,
} = usersSlice.actions;
export default usersSlice.reducer;
