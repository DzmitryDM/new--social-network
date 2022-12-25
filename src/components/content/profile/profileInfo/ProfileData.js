import React from "react";
import { useParams } from "react-router-dom";
import p from "./ProfileInfo.module.css";

const ProfileData = ({ profile, id, goToEditMode }) => {
	return (
		<div className={p.profileinfo_spisok}>
			<ul className={p.profileInfo_aboutMe}>
				{!id && <button onClick={goToEditMode}>Edit</button>}
				<li className={p.item}>About Me: {profile.aboutMe}</li>
				<li className={p.item}>lookingForAJobDescription: {profile.lookingForAJobDescription}</li>
				<li className={p.item}>looking For A Job: {profile.lookingForAJob?"yes":"no"}</li>
				<li className={p.item}>Full Name: {profile.fullName}</li>
			</ul>
			<div className={p.contactsTitle}>Contacts:</div>
			{Object.keys(profile.contacts).map((key) => {
				return (
					<Contacts
						key={key}
						contactTitle={key}
						contactValue={profile.contacts[key]}
					/>
				);
			})}
		</div>
	);
};

const Contacts = ({ contactTitle, contactValue }) => {
	return (
		<ul  className={p.profileInfo_contacts}>
			<li>{contactTitle}:</li>
			<li>{contactValue}</li>
		</ul>
	);
};

export default ProfileData;
