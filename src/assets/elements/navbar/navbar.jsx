// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./navbar.scss"
import "./navbar_phone.scss"

function NavBar() {
  return (
    <div id='grapple-guy-navbar'>
        <div className='logo'>
            <div className='logo-placeholder'/>
            <div className='logo-text-container'>
                <h2>GRAPPLE GUY</h2>
                <span>Grapple Gear and Sups.</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar