import React from "react";
import { useDispatch, useSelector } from "react-redux";
import u from "./Users.module.css";
import { useEffect } from "react";
import {
	setUsers,
} from "../../../features/users/userSlice";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";



const Users = () => {
	const users = useSelector((state) => state.users.users);


	const dispatch = useDispatch();

	useEffect(() => {
 
		dispatch(setUsers());
	}, [dispatch]);


	return (
      
		<div className={u.container}>
      <Paginator/>
      {users.map(user=><User user={user} users={users}/>)}
			
		</div>
	);
};

export default Users;
