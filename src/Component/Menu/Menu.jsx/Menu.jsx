import React from "react";
import "../Menu.css"
import logo from "../../../assets/logo.png"
import { IoChevronDownOutline } from "react-icons/io5";
const Menu = () => {
    return <>
    <nav className="navbar">
        <div className="container">
            <div className="menuWrapper">
                <div className="menuWrapperLogo">
                    <picture>
                        <img src={logo} alt={logo} />
                    </picture>
                </div>
                <div className="menuWrapperItem">
                    <ul className="menuLIstItem">
                        <li className="menuItems">
                            <a href="#"> Services </a>
                        </li>
                        <li className="menuItems">
                            <a href="#"> Industries </a>
                        </li>
                        <li className="menuItems">
                            <a href="#"> About Us </a>
                        </li>
                        <li className="menuItems">
                            <a href="#"> Team Lunar </a>
                        </li>
                        <li className="menuItems">
                            <a href="#"> Blog </a> 
                            <a href="#"> <IoChevronDownOutline /> </a>
                        </li>
                        <li className="menuWrapperBtn">
                           <a href="#"><button className="menuBtnContact">Contact Us</button></a>
                        </li>
                    </ul> 

                </div>
            </div>
        </div>
    </nav>    
        </>
};

export default Menu;