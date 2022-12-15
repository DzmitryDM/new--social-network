import React from "react";
import p from "./Post.module.css";
import Messages from "./message/Messages";
import { useDispatch, useSelector } from "react-redux";
import { addPostActionCreator } from "../../../../features/profile/profileSlice";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { redirect } from "react-router-dom";

const Post = React.memo(() => {


	const initial = useSelector((state) => state.profile.dialog);

const postMessage= initial.map((i=><Messages message={i.message} id={i.id}/>))

	return (
		<div className={p.posts}>
			<div className={p.text}>My posts</div>
			<PostForm />
			<div className={p.messages}>{postMessage}</div>
		</div>
	);
});

const validateOnPostChange = (values) => {
	const errors = {};
	if (values.onPostChange.length > 50) {
		errors.onPostChange ="The maximum number of characters";
	} else if (values.onPostChange.length <1) {
		errors.onPostChange = "Enter text";
	}
	return errors;
};

const PostForm = () => {
	const dispatch = useDispatch();

	const addPost = (onPostChange) => {
		dispatch(addPostActionCreator(onPostChange));
	};

	return (
		<div>
			<Formik
				initialValues={{ onPostChange: "" }}
				validate={validateOnPostChange}
				onSubmit={(values) => {
					addPost(values.onPostChange);
				}}
			>
				{({ errors, touched }) => (
					<Form  className={p.ds}>
						<Field
							className={errors.onPostChange && touched.onPostChange? p.names :undefined }
							type="textarea"
							name="onPostChange"
						/>
                  
						<ErrorMessage className={p.error} name="onPostChange" component="div" />
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
export default Post;
