import React from 'react'
import Logo from '../logo.svg'

function Header(){
    return(
        <nav className='navbar'>
                <div className='nav-title-box'>
                <img src='images/GMS-Logo.svg' width='300px'></img>
                <h1 className='title'>Goins Mobile Scrap</h1>
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