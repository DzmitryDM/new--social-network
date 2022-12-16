import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Preloader from "./components/common/Preloader/Preloader";
import { setInitializeApp } from "./features/auth/initializeSlice";

const App = () => {
	const initializeApp = useSelector((state) => state.initialize.initializeApp);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setInitializeApp());
	}, []);
	if (!initializeApp) {
		return <Preloader/>;
	}

	return (
		<div className="app">
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default App;
