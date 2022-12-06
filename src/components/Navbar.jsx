import React from 'react'

import logo_header from '../assets/logo_header.png'

import bell from '../assets/bell 1.png'
import mail from '../assets/mail.png'
import login from '../assets/login.png'

const Navbar = () => {
  return (
    <div>
        <div className='w-screen h-[80px] bg-black flex'>
            <div className='flex-none w-[311px]'>
                <img src={logo_header} className='w-[228px] h-[35px] block mx-auto mt-[22px]' alt="Vaullti Logo"/>
                Agregar aca a la derecha la linea
            </div>

            <div className='flex-1 m-auto'>
              <span className='font-semibold text-white text-[16px] leading-[16px]'>Vaullt {'>'}</span>
              <span className='font-normal text-[#898989] text-[16px] leading-[16px]'> Recent</span>
            </div>

            <div className='flex-none w-[696px] mr-[36px] h-[42px] m-auto'>
              <div className='flex'>
                <input id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here..."/>

                <div className='w-[24px] h-[40px] mx-[24px] my-auto pt-[9px]'>
                  <img className='w-[24px] h-[24px] max-w-none' src={bell} alt='Bell'></img>
                </div>

                <div className='w-[24px] h-[40px] mx-[24px] my-auto pt-[9px]'>
                  <img className='w-[24px] h-[24px] max-w-none' src={mail} alt='Mail'></img>
                </div>

                <div className='w-[168px] h-[40px] m-auto ml-[60-36]'>
                  <img className="w-[168px] h-[40px] max-w-none" src={login} alt="Login"></img>
                </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar