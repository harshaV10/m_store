import React, { useState } from 'react';
import  Logo  from "../assets/logo.png";
import { Menu } from '../constants/NavMenu';
import { Sublinks } from './Sublinks';

export const Navbar = () => {

  const [menu, setMenu] = useState();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navType, setNavType] = useState("");

  const handleNav = (menu) => {
    setMenu(menu);
    setIsNavOpen(true);
    const selected = Menu.find((item) => item.menu === menu);
    if(selected) {
        const titleCount = selected?.links?.length || 0
        let sublinksCount = 0;
        selected?.links?.forEach((sublink) => {
          sublinksCount += sublink?.sublinks?.length || 0
        })
        console.log(sublinksCount + titleCount , "sublinks")
        if(titleCount >= 3 && sublinksCount > 9){
          setNavType("Big")
        } else {
          setNavType("Normal")
        }
    }
  }

  const handleClose = () => {
    setIsNavOpen(false);
    setMenu(null)
  }

  return (
    <div className='flex absolute '>
      <div className='flex flex-col items-center z-10 w-20 sm:w-32 h-screen bg-tertiary shadow-lg overflow-y-hidden'>
          <img 
              src={Logo} 
              alt=""
              className='w-20 border-b-2 border-primary mb-6 pb-4'
          />
          {/* Menu in sidebar */}
          <nav className='flex flex-col justify-between h-[78%] w-full cursor-pointer'>
          {Menu?.map((data, index) => (
            <div 
              onClick={() => handleNav(data.menu)}
              className={`flex flex-col items-center justify-center w-full h-16 transition-all duration-300 ${data.menu === menu ? "bg-primary" : ""}`}
            >
                <div
                  className='scale-150 text-secondary border-secondary'
                  >
                  {data?.icon}
                </div>
                <h4 
                  key={index}
                  className='font-semibold text-sm mt-1 text-secondary'
                >
                  {data?.menu}
                </h4>
            </div>
          ))}
          </nav>
      </div>
      {/* Sublinks */}
      {isNavOpen && 
        <Sublinks 
          menu={menu} 
          onclose={handleClose} 
          navType={navType} 
        />
      }
    </div>
  )
}
