import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-indigo-900 text-white py-2  below-417:text-sm'>
        <div className="logo">
            <span className='font-bold text-xl below-417:text-sm mx-8'>Shigoto (仕事)</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar