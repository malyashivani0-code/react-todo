import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex lg:px-20 px-5 py-2 bg-violet-100 text-black md:mx-10 justify-between items-center'>
    <div>
      <span className='flex items-center gap-2 text-lg font-bold'>To Do <img src="icon.png" className='h-10 w-10'/></span>
    
    </div>
    <div className='flex gap-5 text-lg' >
      <Link  className='font-medium hover:font-bold transition-all duration-300' to='/'>Task</Link>
      <Link className='font-medium hover:font-bold transition-all duration-300' to='/addtask'>Add</Link>
    </div>
    </nav>
  )
}

export default Navbar