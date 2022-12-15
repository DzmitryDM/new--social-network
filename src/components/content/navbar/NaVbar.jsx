import React from 'react'
import { NavLink } from 'react-router-dom'
import n from './NaVbar.module.css'

const Navbar = () => {

   const classActive=({isActive})=>isActive?n.active:n.actives
  return (
	 <aside className={n.navbar}>
			<ul className={n.list}>
            <li><NavLink to='/' end className={classActive}>Profile</NavLink></li>
				<li><NavLink to='/messages' className={classActive}>Messages</NavLink></li>
				<li><NavLink to='/users' className={classActive}>Users</NavLink></li>
				<li><NavLink to='/news' className={classActive}>News</NavLink></li>
				<li><NavLink to='/music' className={classActive}>Music</NavLink></li>
				<li><NavLink to='/settings' className={classActive}>Settings</NavLink></li>

			</ul>
	 </aside>
  )
}

export default Navbar
