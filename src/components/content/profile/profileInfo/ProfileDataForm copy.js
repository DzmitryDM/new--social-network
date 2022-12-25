import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import style from './ProfileInfo.module.css'
import { saveProfile } from "../../../../features/profile/profileSlice";
 


const validationMyMessage = Yup.object().shape({
	myMessage: Yup.string()
		.min(1, "To short")
		.max(50, "The maximum number of characters")
		.required(""),
});

const ProfileDataForm = () => {

	const dispatch = useDispatch();



	const handleSubmit = (profile) => {
		dispatch(saveProfile(profile))
	}


	 return (
		<div>
			<h1>Any place in your app!</h1>
			<Formik
				initialValues={{aboutMe:"",fullName:"" }}
				validationSchema={validationMyMessage}
				onSubmit={handleSubmit}
			>
				{({ errors, touched }) => (
					<Form className={style.form}>
						<Field type="text" name="profile" />
						<Field type="text" name="profile" />
						<button  type="submit">Send</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};



export default ProfileDataForm;
