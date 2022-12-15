import React from "react";
import loading from "./../image/loading.gif";

const Preloader = () => {
	return (
		<div>
			<img src={loading} alt="" />
		</div>
	);
};

export default Preloader;
