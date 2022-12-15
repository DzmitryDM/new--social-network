import React, { useEffect } from "react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	setStatus,
	updateStatus,
} from "../../../../../features/profile/profileSlice";
import st from "./ProfileStatus.module.css";

const ProfileStatusMode = () => {



	const dispatch = useDispatch();
	const newStatus = useSelector((state) => state.profile.status);

	const [editMode, setEditMode] = useState(false);
	const [status, setEditStatus] = useState(newStatus);

	const activeEditMode = () => {
		setEditMode(true);
	};
	const deaActiveEditMode = () => {
		setEditMode(false);
		dispatch(updateStatus(status));
	};
	const onStatusChange = (e) => {
		setEditStatus(e.currentTarget.value);
	};
	const { id } = useParams();



	return (
		<div>
			{!editMode && (
				<div className={st.status}>
					<span onClick={activeEditMode}>
						{newStatus || "Edit status"}
					</span>
				</div>
			)}
			{editMode && (
				<div>
					<input
						onChange={onStatusChange}
						autoFocus={true}
						onBlur={deaActiveEditMode}
						value={status}
					/>
				</div>
			)}
		</div>
	);
};

export default ProfileStatusMode;
