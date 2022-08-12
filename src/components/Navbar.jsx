import React from 'react'
import { Link } from 'react-router-dom'
import {RiMoonFill} from "react-icons/ri"
import {BsFillSunFill} from "react-icons/bs"
import {Search} from "../components"
import { NavLinks } from '../Links/NavLinks'

 const Navbar = ({setDarkTheme, darkTheme}) => {
  return (
    <div className='p-5 pb-0 flex 
    flex-wrap sm:justify-between 
    items-center justify-center border-b dark:border-neutral-700 border-neutral-200'>
      <div className = "flex justify-between items-center space-x-5 w-screen mb-1">

        <Link to = "/" className='block'>
            <p className='text-lg bg-blue-400 font-bold text-white py-1 px-2 rounded dark:bg-neutral-500 dark:text-neutral-900'>
              Oracle
            </p>
        </Link>

        <Search />
         
         <button className = "block text-xl dark:bg-neutral-50 dark:text-neutral-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg transition-all" 
         type='button' onClick={()=> setDarkTheme(!darkTheme)}>
          {darkTheme ? <BsFillSunFill className='text-red-900'/> : <RiMoonFill className=''/>}
         </button>
      </div>

      <div className = "w-full mt-4 pb-2">
        <div className = "w-3/12 flex justify-between items-center m-auto">
        {
        NavLinks?.map( (Itemname) =>{
          const {id, name, icon, link} = Itemname;

          return (
            <a href={link} target={"_self"} rel="noreferrer" key={id}>
             <ul>
              <li>
                <span>{icon}</span>
                <span>{name}</span>
              </li>
              </ul> 
             
            </a>
          )
        })
        }</div>
        </div>


    </div>
  )
}

export default Navbar