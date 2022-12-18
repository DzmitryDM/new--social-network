import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";
import Preloader from "../../common/Preloader/Preloader";
import n from "./News.module.css";

const News = () => {
   const isAutch=useSelector(state=>state.auth.isAuth)
const redirect =useNavigate()


useEffect(()=>{
if(!isAutch){
   redirect("/loginForm")
}
})

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
