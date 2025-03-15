import React, { useState } from "react";
import "./Navbar.css";
import menu_btn from "../../assets/menu_open.svg";
import close_btn from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu,setMenu]=useState(false)
  return (
    <div className="navbar">
      <div className="logo">Anurag</div>
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ul className={`mob-nav-menu ${menu ? "active" : ""}`}>
        <li><img onClick={()=>{setMenu(!menu)}} src={close_btn} alt=""  width={25}/></li>
        <li><a onClick={()=>{setMenu(!menu)}} href="#home">Home</a></li>
        <li><a onClick={()=>{setMenu(!menu)}} href="#about">About Me</a></li>
        <li><a onClick={()=>{setMenu(!menu)}} href="#skills">Skills</a></li>
        <li><a onClick={()=>{setMenu(!menu)}} href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-connect"><a href="">Connect with Me</a></div>
      <img onClick={()=>{setMenu(!menu)}} className="menu" src={menu_btn} alt="Menu" />
    </div>
  );
};

export default Navbar;
