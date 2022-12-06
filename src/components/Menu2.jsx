import React from 'react'

import jobs from '../assets/order1.png'
import bids from '../assets/about2.png'
import vault from '../assets/account3.png'
import marketplace from '../assets/logout4.png'
import machines from '../assets/go-5.png'

const Menu2 = () => {
  return (

    <div className="menuright flex flex-col relative">
      <div className="flex relative">
          <div className="flex flex-col relative basis-6">
              <img
                  className="w-6 h-auto align-top object-contain object-[center_top] relative min-w-[24px]"
                  src={jobs}
                  alt="Jobs"
              />
          </div>
      
      <div className="basis-4" />
          <a href='/jobs' className="font-normal text-[16px] leading-[1.2] font-Calibri text-white tracking-[0px] relative shrink-0 basis-auto min-w-[88px] mt-1 mx-0 mb-0 hover:underline">
              Order History
          </a>
      </div>

      <div className="flex relative mt-10 mx-0 mb-0">
        <div className="flex flex-col relative basis-6">
          <img
            className="w-6 h-auto align-top object-contain object-[center_top] relative min-w-[24px]"
            src={bids}
            alt="bids"
          />
        </div>
        <div className="basis-4" />
        <a href='/bids' className="font-normal text-[16px] leading-[1.2] font-Calibri text-white tracking-[0px] relative shrink-0 basis-auto min-w-[86px] mt-1 mx-0 mb-0 hover:underline">
          About & Help
        </a>
      </div>

      <div className="flex relative mt-10 mx-0 mb-0">
        <div className="flex flex-col relative basis-6">
          <img
            className="w-6 h-auto align-top object-contain object-[center_top] relative min-w-[24px]"
            src={marketplace}
            alt="marketplace"
          />
        </div>
        <div className="basis-4" />
        <a href='/marketplace' className="font-normal text-[16px] leading-[1.2] font-Calibri text-white tracking-[0px] relative shrink-0 basis-auto min-w-[85px] mt-1 mx-0 mb-0 hover:underline">
          Account Settings
        </a>
      </div>

      <div className="flex relative mt-10 mx-0 mb-0">
        <div className="flex flex-col relative basis-6">
          <img
            className="w-6 h-auto align-top object-contain object-[center_top] relative min-w-[24px]"
            src={vault}
            alt="Vault"
          />
        </div>
        <div className="basis-4" />
        <a href='/' className="font-normal text-[16px] leading-[1.2] font-Calibri text-white tracking-[0px] relative shrink-0 basis-auto min-w-[85px] mt-1 mx-0 mb-0 hover:underline">
          Logout
        </a>
      </div>

      <section className="flex relative mt-10 mx-0 mb-0">
        <div className="flex flex-col h-6 relative basis-6">
          <img
            className="w-6 h-auto align-top object-contain object-[center_top] relative min-w-[24px]"
            src={machines}
            alt="Machines"
          />
        </div>

        <div className="basis-4" />
        <a href='/machines' className="font-normal text-[16px] leading-[1.2] font-Calibri text-white tracking-[0px] relative shrink-0 basis-auto min-w-[85px] mt-1 mx-0 mb-0 hover:underline">
          Go V-PRO
        </a>
      </section>
    
    
    </div>
  )
}

export default Menu2