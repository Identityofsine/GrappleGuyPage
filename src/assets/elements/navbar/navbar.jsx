import React from 'react'
import "./navbar.scss"


function NavBar() {
  return (
    <div id='grapple-guy-navbar'>
        <div className='logo'>
            <img src='logo' alt='LOGO'/>
            <div className='logo-text-container'>
                <h2>Grapple Guy</h2>
                <span>Grapple Gear and Sups.</span>
            </div>
        </div>

    </div>
  )
}

export default NavBar