import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../../assets/shared/icon-hamburger.svg";
import Close from "../../assets/shared/icon-close.svg";
import { Nav, Dropdown, Logo } from "./Navbar";
import logo from "../../assets/shared/logo.svg";
const Navbar = () => {
  const [show, setShow] = useState();
  return (
    <>
      <Nav>
        <Logo src={logo} alt='logo' />
        <hr className='line' />
        <div className='links'>
          <ul>
            <li>
              <NavLink to={"/"}>
                <span>00</span> HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={"/destination/moon"}>
                <span>01</span> DESTINATION
              </NavLink>
            </li>

            <li>
              <NavLink to={"/crew/Douglas"}>
                <span>02</span> CREW
              </NavLink>
            </li>
            <li>
              <NavLink to={"/tech/Launch"}>
                <span>03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </div>
        {!show && (
          <Logo className='menu' src={Menu} onClick={() => setShow(true)} />
        )}
      </Nav>{" "}
      {show && (
        <Dropdown>
          <Logo src={Close} className='close' onClick={() => setShow(false)} />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => isActive && "active"}
                to={"/"}>
                <span>00</span> HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={"/destination/moon"}>
                <span>01</span> DESTINATION
              </NavLink>
            </li>

            <li>
              <NavLink to={"/crew/Douglas"}>
                <span>02</span> CREW
              </NavLink>
            </li>

            <li>
              <NavLink to={"/tech/Launch"}>
                <span>03</span> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </Dropdown>
      )}
    </>
  );
};

export default Navbar;
