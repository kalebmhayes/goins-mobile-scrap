import React from 'react'
import Pin from '../pin.svg'
import Phone from '../Phone-icon.svg'

function Header(){
    return(
        <nav className='navbar'>
                <div className='nav-title-box'>
                <img classname='nav-photo' src='images/GMS-Logo.svg' width='300px'></img>
                <h1 className='title'>Goins Mobile Scrap</h1>
                <div className='nav-contact'>
                    <span><img src={Phone} width='30px' /> <span>(843)-447-0460</span></span>
                   <span><img src={Pin} width='25px'/> <span>4887 Sawgrass Lane, Longs, SC</span> </span>
                </div>
            </div>

            <div className='nav-items'>
                <a className='home' href='#'>Home</a>
                <a className='services' href='#'>Services</a>
                <a className='image-gallery' href='#'>Image Gallery</a>
                <a className='scrap-metal-laws' href='#'>Scrap Metal Laws</a>
                <a className='contacts' href='#'>Contact</a>
            </div>
        </nav>
    )
}

export default Header