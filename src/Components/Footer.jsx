import React from 'react'
import Phone from '../Phone-icon.svg'
import Pin from '../pin.svg'

function Footer(){
    return(
        <div className='footer'>
            <div className='footer-sidebar'>
                <img src='images/GMS-Logo.svg'/>
                    <span><img src={Phone} width='30px' /> <span>(843)-447-0460</span></span>
                   <span><img src={Pin} width='30px' /> <span>4887 Sawgrass Lane, Longs, SC</span> </span>
                 
            </div>
            <div className='footer-content'>
                
            </div>

        </div>
    )
}

export default Footer