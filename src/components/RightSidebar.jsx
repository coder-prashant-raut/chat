import React from 'react'
import assets, { imagesDummyData } from '../assets/assets'

function RightSidebar({selectedUser}) {
  return  selectedUser && (
    <div className={`bg-[#8185B2]/10 text-white w-full relative overflow-hidden ${selectedUser ? "max-md:hidden" : ''}`}>

      <div className='pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto'>
        <img src={selectedUser?.ptofilePic || assets.avatar_icon} alt="" className='w-20 aspect-[1/1] rounded-full' />
        <h1 className='px-10 textxl font-medium mx-auto flex items-center gap-2'>
          <p className='w-2 h-2 rounded-full bg-green-500'>{selectedUser.fullName}</p>
        </h1>
        <p className='px-10 mx-auto'>
          {selectedUser.bio}
        </p>
      </div>
      <hr className='border-[#ffffff50] my-4'/>

      <div className='px-5 text-xs'>
        <p>Media</p>
        <div className='mt-2 max-h-[200px] overflow-scroll grid grid-cols-2 gap-4 opacity-80'>
          {imagesDummyData}
        </div>
      </div>
    </div>
  )
}

export default RightSidebar