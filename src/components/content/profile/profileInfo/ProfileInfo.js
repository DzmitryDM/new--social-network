import React, { useEffect } from "react";
import p from "./ProfileInfo.module.css";
import serval from "./image/serval.jpg";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../../common/Preloader/Preloader";
import { useParams } from "react-router-dom";
import {
	loadingPhoto,
	setProfile,
	setStatus,
} from "../../../../features/profile/profileSlice";
import ProfileStatusMode from "./ProfileStatus/ProfileStatusMode";
import ProfileData from "./ProfileData";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
//import ProfileDataForm from "./ProfileDataForm copy";

const ProfileInfo = () => {
	const dispatch = useDispatch();
	const profile = useSelector((state) => state.profile.profile);
	const userId = useSelector((state) => state.auth.id);
	let { id } = useParams();

	const [editMode, setEditMode] = useState(false);

	useEffect(() => {
		if (!id) {
			id = userId;
		}
		dispatch(setProfile(id));
		dispatch(setStatus(id));
	}, [id, userId]);

	if (!profile) {
		return <Preloader />;
	}

	const mainFotoSelected = (e) => {
		if (e.target.files && e.target.files.length) {
			dispatch(loadingPhoto(e.target.files[0]));
		}
	};

const goToEditMode = () => {
  setEditMode(true)
}
   

	return (
		<div className={p.profileinfo}>
			<ProfileStatusMode />
			<div className={p.profileinfoava}>
				<img alt="" src={profile.photos.large || serval} />
			</div>
			{!id && <input type="file" onChange={mainFotoSelected} />}
			{editMode ? (
				<ProfileDataForm profile={profile} setEditMode={setEditMode} />
			) : (
				<ProfileData
					id={id}
					profile={profile}
					goToEditMode={goToEditMode}
				/>
			)}
		</div>
	);
};

export default ProfileInfo;
