import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {  selectIsAuth, selectLogins, setAuth, setLogout } from "./../../features/auth/authSlice";
import h from "./Header.module.css";

const Header = () => {

	const logins = useSelector(selectLogins);
	const isAuth = useSelector(selectIsAuth);



	const dispatch = useDispatch();

	const deletedLogin = () => {
		dispatch(setLogout());
	};



	return (
		<div className={h.wrapper}>
			<div className={h.img}></div>
			<div className={h.loginBlock}>
				{isAuth ? (
					<NavLink to="/loginForm">{logins}</NavLink>
				) : (
					<NavLink to="/loginForm">reguest</NavLink>
				)}
				<button onClick={deletedLogin}>Deleted</button>
			</div>
		</div>
	);
};
//

export default Header;
