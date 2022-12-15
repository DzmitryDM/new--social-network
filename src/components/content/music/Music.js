import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import m from './Music.module.css'

const Music = () => {
   	const redirect = useNavigate();
	const isAuth = useSelector((state) => state.auth.isAuth);
	useEffect(() => {
		if (!isAuth) {
			redirect("/loginForm");
		}
	});
  return (
    <div>
      Music
    </div>
  )
}

export default Music
