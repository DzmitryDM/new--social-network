import React from "react";
import { useDispatch, useSelector } from "react-redux";
import u from "./Users.module.css";
import caracal from "./image/caracal.jpg";
import {
	setUnfollow,
	setFollow,
} from "../../../features/users/userSlice";
import { useNavigate } from "react-router-dom";

const User = ({ user }) => {
	const followingInProgress = useSelector(
		(state) => state.users.followingInProgress);

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const linkToProfile = (id) => {
		navigate("/" + id);
	};
	return (
		<div className={u.container}>
			<div className={u.users}>
				<div className={u.img_container}>
					{<img
						onClick={() => {
							linkToProfile(user.id);
						}}
						src={user.photos.small != null ? user.photos.small : caracal}
						alt=""
					/>}
                

					<div className={u.follows}>
						{user.followed ? (
							<button
								disabled={followingInProgress.some((id) => id === user.id)}
								onClick={() => dispatch(setUnfollow(user.id))}
							>
								Unfollow
							</button>
						) : (
							<button
								disabled={followingInProgress.some((id) => id === user.id)}
								onClick={() => dispatch(setFollow(user.id))}
							>
								Follow
							</button>
						)}
					</div>
				</div>
				<div className={u.name_container}>
					<div className={u.name}>{user.name}</div>
					<div className={u.status}>{user.status}</div>
				</div>
				<div className={u.location_container}>
					<div className={u.city}>{"user.location.city"}</div>
					<div className={u.country}>{"user.location.country"}</div>
				</div>
			</div>
		</div>
	);
};

export default User;
