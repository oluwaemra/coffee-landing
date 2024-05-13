import React, { useState } from 'react';
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from 'react-icons/hi2';

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home"
        },
        {
            text: "Story"
        },
        {
            text: "Menu"
        },
        {
            text: "Space"
        },
        {
            text: "Community"
        },
        {
            text: "News"
        }
    ]
  return <nav>
    <div className='nav-logo-container'>
        <img src={Logo} alt="" />
    </div>
    <div className='nav-links-container'>
        <a href="">Home</a>
        <a href="">Story</a>
        <a href="">Menu</a>
        <a href="">Space</a>
        <a href="">Community</a>
        <a href="">News</a>
        <button className='primary-button'>Order</button>
        <button className='tertiary-button'>Sign In</button>



    </div>
    <div className='nav-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
    </div>
    
  </nav>;
};

export default NavBar;