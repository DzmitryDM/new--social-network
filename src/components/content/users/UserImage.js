import React from "react";
import { useDispatch, useSelector } from "react-redux";
import u from "./Users.module.css";
import caracal from "./image/caracal.jpg";
import {
	setUnfollow,
	setFollow,
} from "../../../features/users/userSlice";
import { useNavigate } from "react-router-dom";

const UserImage = ({ user }) => {
	const followingInProgress = useSelector(
		(state) => state.users.followingInProgress);

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const linkToProfile = (id) => {
		navigate("/" + id);
	};

	return (
<>
					<img
						onClick={() => {
							linkToProfile(user.id);
						}}
						src={user.photos.small != null ? user.photos.small : caracal}
						alt=""
					/>
</>

	);
};


