import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { setLogin } from "../../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const validateLogin = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Reguired"),
	password: Yup.string().required("Reguired"),
});

const LoginForm = () => {
	const dispatch = useDispatch();



	const login = (email, password, rememberMe) => {
		dispatch(setLogin(email, password, rememberMe));
	};

	return (
		<div>
			<h1>Any place in your app!</h1>
			<Formik
				initialValues={{ email: "", password: "", rememberMe: "" }}
				validationSchema={validateLogin}
				onSubmit={login}
			>
				{({ errors, touched }) => (
					<Form>
						<Field type="email" name="email" />
						{errors.email && touched.email ? (
							<div>{errors.email}</div>
						) : undefined}
						<Field type="password" name="password" />

						<Field type="checkbox" name="rememberMe" />
						<button  type="submit">Send</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;
