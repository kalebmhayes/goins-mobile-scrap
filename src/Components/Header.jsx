import React from 'react'
import Pin from '../pin.svg'
import Phone from '../Phone-icon.svg'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <nav className='navbar'>
                <div className='nav-title-box'>
                <Link to='/'><img className='nav-photo' src='images/GMS-Logo.svg' width='300px'></img></Link>
                <h1 className='title'>Goins Mobile Scrap</h1>
                <div className='nav-contact'>
                    <span><img src={Phone} width='30px' /> <span>(843)-447-0460</span></span>
                   <span><img src={Pin} width='25px'/> <span>4887 Sawgrass Lane, Longs, SC</span> </span>
                </div>
            </div>

            <div className='nav-items'>
               <Link className='home nav-item' to='/' >Home</Link>
                <Link className='services nav-item' to='/services'>Services</Link>
                <Link className='image-gallery nav-item' to='/ImageGallery'>Image Gallery</Link>
                
                
            </div>
        </nav>
    )
}

export default Header