import React from "react";
import loading from "./../image/loading.gif";
import style from "./Preloader.module.css"

const Preloader = () => {
	return (
		<div className={style.pr}>
			<img src={loading} alt="" />
		</div>
	);
};

export default Preloader;
