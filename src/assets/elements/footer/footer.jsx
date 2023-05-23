import React from 'react'
import "./footer.scss"
import "./footer_phone.scss"
import LineSeperator from '../line-seperate/line-seperate'

function Footer() {
  return (
    <footer>
        <LineSeperator text='COPYRIGHT (2023)' right = {true}/>
        <div id='gg-footer-container'>
            <div className='logo'>
                <div className='logo-placeholder'/>
                <div className='logo-text-container'>
                    <h2>GRAPPLE GUY</h2>
                    <span>Grapple Gear and Sups.</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer