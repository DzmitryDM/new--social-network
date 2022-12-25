import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNewPostActionCreator } from "../../../../features/messages/messagesSlice";
import my from "./myMessage.module.css";
import * as Yup from "yup";

const MyMessage = () => {
	let userName = useSelector((state) => state.messages.nameUsers);

	return (
		<div className={my.myMessage}>
			<div className={my.container}>
				<div className={my.name}>{userName}</div>
			</div>
			<MyMessageForm />
		</div>
	);
};

const validationMyMessage = Yup.object().shape({
	myMessage: Yup.string()
		.min(1, "To short")
		.max(50, "The maximum number of characters")
		.required(""),
});

const MyMessageForm = () => {
     
	const dispatch = useDispatch();
	const newPostMessage = (myMessage) => {
		dispatch(updateNewPostActionCreator(myMessage));
	}

	return (
		<div>
			<Formik
				initialValues={{ myMessage: "" }}
				validationSchema={validationMyMessage}
				onSubmit={(values) => {
					newPostMessage(values.myMessage);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<Field
							className={
								errors.myMessage && touched.myMessage ? my.texts : undefined
							}
							type="textarea"
							name="myMessage"
						/>
						{errors.myMessage && touched.myMessage ? (
							<div className={my.error}> {errors.myMessage}</div>
						) : undefined}
						<button className={my.click} type="submit">
							Send
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default MyMessage;
