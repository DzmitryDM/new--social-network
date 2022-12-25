import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { setLogin } from "../../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import style from './../Profile.module.css'

const validateLogin = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Reguired"),
	password: Yup.string().required("Reguired"),
});

const LoginForm = () => {
	const dispatch = useDispatch();
const captchaUrl= useSelector(state=>state.auth.captchaUrl)


	const login = (email, password, rememberMe,captcha) => {
dispatch(setLogin(email, password, rememberMe,captcha));
	};

	return (
		<div>
			<h1>Any place in your app!</h1>
			<Formik
				initialValues={{ email: "", password: "", rememberMe: "",captcha:"" }}
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

                  {captchaUrl && <img className={style.captchas} src={captchaUrl} alt=""/>}
                  {captchaUrl && <Field type="text" name="captcha"/>}
						<button  type="submit">Send</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;
