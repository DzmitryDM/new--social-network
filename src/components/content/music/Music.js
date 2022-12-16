import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import m from './Music.module.css'

const Music = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);
	useEffect(() => {

	});
  return (
    <div>
      Music
    </div>
  )
}

export default Music
