import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import n from "./News.module.css";

const News = () => {
	const redirect = useNavigate();
	const isAuth = useSelector((state) => state.auth.isAuth);
	useEffect(() => {
		if (!isAuth) {
		return	redirect("/loginForm");
		}
	});

	return (
		<div>
			<div>
				<div>News</div>
				<div>News</div>
				<div>News</div>
			</div>
		</div>
	);
};

export default News;
