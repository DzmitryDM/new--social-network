import React, { useEffect } from "react";
import p from "./ProfileInfo.module.css";
import serval from "./image/serval.jpg";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../../common/Preloader/Preloader";
import { useNavigate, useParams } from "react-router-dom";
import {
	loadingPhoto,
	savePhotos,
	setProfile,
	setStatus,
} from "../../../../features/profile/profileSlice";
import ProfileStatusMode from "./ProfileStatus/ProfileStatusMode";
import { savePhoto } from "../../../api/api";

const ProfileInfo = () => {
	const dispatch = useDispatch();
	const profile = useSelector((state) => state.profile.profile);
	const userId = useSelector((state) => state.auth.id);
	let { id } = useParams();

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
            dispatch(savePhotos(e.target.files[0]));
        }
	};

	return (
		<div className={p.profileinfo}>
			<ProfileStatusMode />
			<div className={p.profileinfo_ava}>
				<img src={profile.photos.large || serval} />
			</div>
			{!id && <input type="file" onChange={mainFotoSelected} />}

			<div className={p.profileinfo_spisok}>
				<ul className={p.profileInfo_aboutMe}>
					<li className={p.item}>{profile.aboutMe}</li>
					<li className={p.item}>{profile.fullName}</li>
					<li className={p.item}>{profile.lookingForAJob}</li>
				</ul>
				<ul className={p.profileInfo_contacts}>
					<li className={p.item}>{profile.contacts.facebook}</li>
					<li className={p.item}>{profile.contacts.website}</li>
					<li className={p.item}>{profile.contacts.vk}</li>
					<li className={p.item}>{profile.contacts.twitter}</li>
					<li className={p.item}>{profile.contacts.instagram}</li>
					<li className={p.item}>{profile.contacts.youtube}</li>
					<li className={p.item}>{profile.contacts.github}</li>
					<li className={p.item}>{profile.contacts.mainLink}</li>
				</ul>
			</div>
		</div>
	);
};

export default ProfileInfo;
