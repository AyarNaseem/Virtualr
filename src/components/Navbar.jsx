import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {navItems} from './../constants';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = ()=>{
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/8">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className='h-10 w-10' src={logo} alt="logo" />
            <span className="ml-2 text-xl tracking-tight">VirtuaIR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item,index)=> (
            <li key={index}>
              <a className='hover:text-orange-500' href={item.href}>{item.label}</a>
            </li>
            )
          )}
          </ul>
          <div className="hidden lg:flex justfy-center item-center space-x-12">
            <a href="#" className='py-2 px-3 border rounded-md' >Sign In</a>
            <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create An Account</a>
          </div>
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleMobileMenu} className='cursor-pointer'>
            {mobileMenuOpen ? <X/> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenuOpen &&(
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul >
              {navItems.map((item,index)=>(
                <li key={index} className='py-4'>
                  <a className='hover:text-orange-500' href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className='py-2 px-3 border rounded-md'> Sign In</a>
              <a href="" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create An Account</a>
            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
