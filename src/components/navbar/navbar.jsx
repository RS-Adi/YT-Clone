import React from 'react'
import './navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from'../../assets/logo.png'
import search_icon from'../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import mode_icon from '../../assets/mode.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
const navbar = () => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' src = {menu_icon} alt = "" /> 
        <img className='logo' src = {logo} alt=''/>
      </div>
      <div>
        <input type='text' placeholder='Search'/>
        <img src={search_icon} alt=''/>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={mode_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />

      </div>
    </nav>
  )
}

export default navbar