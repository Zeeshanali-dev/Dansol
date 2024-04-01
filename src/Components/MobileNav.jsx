import React, { useState } from 'react'
import Logo_main from "../assets/Logo_main.png"
import Dropdown from './Dropdown';

function MobileNav
() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closed = () => setClick(false)
    
    const onMouseEnter = () => {
        
          setDropdown(true);
       
    };
    
    const onMouseLeave = () => {
    
        setDropdown(false);
      
    };
  return (
      <>
          <nav className='bg-gray-950 w-full text-white px-4 md:px-16 py-4 flex justify-between relative'>
              <div>
                  <img src={Logo_main} alt="" />
              </div>
              <div>
                  <ul className= {`md:flex  mr-3 absolute md:static bg-gray-500 md:bg-inherit h-screen md:h-auto z-10 min-w-52 top-[65px] ${click ? "left-[0]" : "-left-[100%]"}`}>
                      <li ><a href="#" className='px-3 py-2 hover:bg-blue-500 rounded-md relative' onClick={closed}>Home</a></li>
                      <li onMouseEnter={onMouseEnter}
                          onMouseLeave={onMouseLeave}><a
                          href="#"
                          className='px-3 py-2 hover:bg-blue-500 rounded-md'
                          onClick={closed}
                          
                      >Services</a>
                          {dropdown && <Dropdown />}
                      </li>
                      <li ><a href="#" className='px-3 py-2 hover:bg-blue-500 rounded-md' onClick={closed}>Login</a></li>
                  </ul>
                 
              </div>
              <div className='md:hidden cursor-pointer' onClick={handleClick}>{ click ? "➖" : "➕"}</div>
          </nav>
      </>
  )
}

export default MobileNav
