import React, { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Link } from 'react-router-dom'
import AuthModal from './AuthModal'

const Navbar = () => {
  const [modalType, setModalType] = useState(null); // "login" or "join"

  return (
    <div className='w-full h-20 bg-gray-100 lg:px-10'>
      <MaxWidthWrapper className="flex items-center justify-between max-md:px-5">
        <Link to="/">
          <img src="/logo.png" alt="YT Bridge" className='lg:h-28 lg:w-28 h-16 w-16' />
        </Link>
        <div className='flex items-center justify-center gap-x-4'>
          <button
            className='lg:w-[125px] lg:h-11 h-10 w-[100px] bg-transparent flex items-center justify-center rounded-lg border border-[#3C4852]'
            onClick={() => setModalType("login")}
          >
            <span className='text-[#3C4852] text-sm lg:text-base font-medium'>Log in</span>
          </button>
          <button
            className='lg:w-[125px] lg:h-11 h-10 w-[100px] flex items-center justify-center rounded-lg bg-[#3C4852]'
            onClick={() => setModalType("join")}
          >
            <span className='text-white text-sm lg:text-base font-medium'>Join for free</span>
          </button>
        </div>
      </MaxWidthWrapper>

      {modalType && (
        <AuthModal type={modalType} onClose={() => setModalType(null)} />
      )}
    </div>
  )
}

export default Navbar;
