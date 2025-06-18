import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaPersonSkiingNordic } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <div className='flex flex-col md:flex-row text-lg md:text-xl font-medium gap-4 md:gap-12 md:items-center'>
      <NavLink to='/' onClick={() => setMenuOpen(false)}>
        {({ isActive }) => (
          <span className={`flex items-center gap-1 ${isActive ? "text-slate-600" : ""}`}>
            <IoMdHome />
            Home
          </span>
        )}
      </NavLink>
      <NavLink to='/packages' onClick={() => setMenuOpen(false)}>
        {({ isActive }) => (
          <span className={`flex items-center gap-1 ${isActive ? "text-slate-600" : ""}`}>
            <FaPersonSkiingNordic />
            Packages
          </span>
        )}
      </NavLink>
      <NavLink to='/aboutus' onClick={() => setMenuOpen(false)}>
        {({ isActive }) => (
          <span className={`flex items-center gap-1 ${isActive ? "text-slate-600" : ""}`}>
            <IoIosPerson />
            AboutUs
          </span>
        )}
      </NavLink>
      <NavLink to='/contact' onClick={() => setMenuOpen(false)}>
        {({ isActive }) => (
          <span className={`flex items-center gap-1 ${isActive ? "text-slate-600" : ""}`}>
            <RiCustomerService2Fill />
            Contact
          </span>
        )}
      </NavLink>
    </div>
  );

  return (
    <nav className='flex justify-between items-center h-[10vh] px-4 md:px-8 select-none relative sm:mt-5 mt-2'>
      <NavLink to='/' onClick={() => setMenuOpen(false)}>
        <img
          className='h-auto max-h-20 w-auto max-w-xs object-cover md:max-h-24'
          src="/BtLogo.png"
          alt="BudgetTrip.com"
          draggable="false"
        />
      </NavLink>

      <div className='hidden md:flex'>{navLinks}</div>

      <div className='md:hidden text-3xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
      </div>

      {menuOpen && (
        <div className='absolute top-[10vh] left-0 w-full bg-white shadow-md px-4 py-4 z-50'>
          {navLinks}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
