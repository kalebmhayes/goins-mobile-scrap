import React from 'react'
import Logo from '../logo.svg'

function Footer(){
    return(
        <div className='footer'>
            <div className='footer-sidebar'>
                <img src='images/GMS-Logo.svg'/>
                 <span><img src={Logo} width='50px' /><span>phone number</span></span>
                 
            </div>
            <div className='footer-content'>
                <h1>We weigh, We pay, Cash that day</h1>
            </div>

        </div>
    )
}

export default Footer