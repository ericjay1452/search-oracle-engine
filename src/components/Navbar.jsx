import React from 'react'
import { Link } from 'react-router-dom'

 const Navbar = ({setDarkTheme, darkTheme}) => {
  return (
    <div className='p-5 pb-0 flex 
    flex-wrap sm:justify-between 
    items-center justify-center border-b dark:border-neutral-700 border-neutral-200'>
      <div className = "flex justify-between items-center space-x-5 w-screen">

        <Link to = "/">
            <p className='text-lg bg-blue-400 font-bold text-white py-1 px-2 rounded dark:bg-neutral-500 dark:text-neutral-900'>
              Oracle
            </p>
        </Link>
         
         <button className = "text-xl dark:bg-neutral-50 dark:text-neutral-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg transition-all" 
         type='button' onClick={()=> setDarkTheme(!darkTheme)}>
          {darkTheme ? "Light" : "Dark"}
         </button>
      </div>
    </div>
  )
}

export default Navbar