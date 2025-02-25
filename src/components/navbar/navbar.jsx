import React from 'react'
import './navbar.css'
import menu_icon from '../../assets/menu.png'

const navbar = () => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img src = {menu_icon} alt = "" /> 
      </div>
    </nav>
  )
}

export default navbar