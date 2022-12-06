
import React from 'react'

import Plus from '../../assets/Pluss.png'

const NewJobs = () => {
  return (
    <>
        <div className='bg-[#F8F8F8] flex'>
            <div className='flex-none'>
                <a href='#'>
                    <div className="inline-flex items-center justify-center w-72 h-16 px-5 py-2.5 bg-indigo-500 border rounded-md m-[40px]">
                        <div className="inline-flex space-x-1 items-center justify-start">
                            <img className="rounded-lg h-[10px] w-[10px] mr-2" src={Plus} alt="Plus Sign"/>
                            <p className="text-sm font-bold leading-normal text-white capitalize">Start new job</p>
                        </div>
                    </div>
                </a>
            </div>

            {/* JOBS IN PROGRESS */}
            <div className="flex-none">
                <div class="w-96 h-16 m-[40px]">
                    <div class="flex space-x-24 items-center justify-end flex-1 h-16 px-8 py-3.5 bg-white border rounded-md border-gray-300">
                        <div class="flex space-x-16 items-center justify-start">
                            <p class="text-sm font-bold leading-normal capitalize">Jobs in Progress</p>
                            <img class="transform -rotate-90 w-3 h-2/3 rounded-full" src="https://via.placeholder.com/12x16"/>
                        </div>
                        <div class="w-8 h-full">
                            <div class="flex items-center justify-center flex-1 h-full px-2 pt-3.5 pb-2.5 bg-blue-500 rounded-lg">
                                <div class="inline-flex flex-col space-y-0.5 items-center justify-center flex-1 h-full">
                                    <div class="w-full h-0.5 border-white"/>
                                    <div class="w-2.5 h-0.5 border-white"/>
                                    <div class="w-1.5 h-0.5 border-white"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    
        <div className="inline-flex flex-col space-y-2 items-start justify-start">
            <p className="text-xl font-bold">Dashboard</p>
            <div className="inline-flex space-x-2 items-start justify-start">
                <p className="text-base font-bold leading-normal">User</p>
                <p className="text-base leading-normal text-gray-600">AC2155</p>
            </div>
        </div>

    </>
  )
}

export default NewJobs