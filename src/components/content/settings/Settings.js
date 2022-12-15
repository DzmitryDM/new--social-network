import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './Settings.module.css'
const Settings = () => {
   	const redirect = useNavigate();
	const isAuth = useSelector((state) => state.auth.isAuth);
	useEffect(() => {
		if (!isAuth) {
			redirect("/loginForm");
		}
	});
  return (
    <div>
      Settings
    </div>
  )
}
export default Settings
