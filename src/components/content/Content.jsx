import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import c from "./Content.module.css";
import Music from "./music/Music";
import Navbar from "./navbar/NaVbar";
import News from "./news/News";
import Profile from "./profile/Profile";
import Settings from "./settings/Settings";
//import Users from "./users/Users";
import LoginForm from "./profile/loginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
//import UserContainer from './users/Users copy'
const Messages = React.lazy(() => import("./messages/Messages"));
const Users = React.lazy(() => import("./users/Users"));

const Content = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);

	return (
		<div className={c.content}>
			<Navbar />
			<Routes>
				<Route path="/" element={<Profile />} />

				<Route path="/:id" element={<Profile />} />

				<Route
					path="/messages"
					element={
						<Suspense fallback={<div>Loading..</div>}>
							<Messages />
						</Suspense>
					}
				/>

				<Route
					path="/users"
					element={
						<Suspense fallback={<div>Loading..</div>}>
							<Users />
						</Suspense>
					}
				/>

				<Route path="/news" element={<News />} />

				<Route path="/music" element={<Music />} />

				<Route path="/settings" element={<Settings />} />

				<Route path="/loginForm" element={<LoginForm />} />
			</Routes>
		</div>
	);
};

export default Content;
