import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import Post from './post/Post';
import p from './Profile.module.css'
import ProfileInfo from './profileInfo/ProfileInfo';
import ProfileInfoCopy from './profileInfo/ProfileInfo';


const Profile = () => {
const redirect = useNavigate();
	const isAuth = useSelector((state) => state.auth.isAuth);

   

   return (
      <div className={p.profile}>
        <ProfileInfo/>
         <Post/>
      </div>
   )
}

export default Profile;

