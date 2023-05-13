import React, {useState, useEffect} from 'react'

import { logo, menu, close } from '../assets'

import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

const navbar = () => {
const [active, setActive] = useState("");
const [toggle, setToggle] = useState(false);

  
  return (
    <nav className='w-full flex items-center fixed top-2 bg-off-white h-[70px] z-40' >      
      <div className='w-full flex justify-between items-center max-w-6xl mx-auto'>
        <Link to='/'
        className='flex items-center mx-4'
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}>
          <img src={logo} className='' />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 z-20 min-w-[256px] bg-white mx-4'>
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className= {`${active === nav.title? 'text-soft-red' : 'text-dark-grayish-blue'} hover:text-soft-red`}
            onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center '>
          <img 
          src={toggle ? close : menu} 
          className='objext-contain cursor-pointer mx-4 z-40 '
          onClick={() => setToggle(!toggle)}/>

          <div className={`${!toggle? 'hidden' : 'flex'} absolute top-20 right-0 w-full z-10 bg-off-white`} >
            <ul className='list-none flex justify-end items-start flex-col gap-5 mx-4'>
            {navLinks.map((nav) => (
            <li
            key={nav.id}
            className= {`${active === nav.title? 'text-soft-red' : 'text-dark-grayish-blue'} hover:text-soft-red`}
            onClick={() => {
              setActive(nav.title);
              setToggle(!toggle);
            }}
            >
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
          ))}
            </ul>

          </div>
        </div>

      </div>
    </nav>
  )
}

export default navbar