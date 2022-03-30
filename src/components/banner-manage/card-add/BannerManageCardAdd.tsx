import React from 'react'
import { Link } from 'react-router-dom'

function BannerManageCardAdd() {
  return (
    <div className='border rounded-lg overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all ease-out group h-full'>
      <Link to='edit'>
        <div className='h-full flex flex-col items-center justify-center'>
          <span className='w-14 h-14 rounded-full mb-6 bg-gray-400 text-white text-5xl cursor-pointer flex justify-center group-hover:bg-green-500'>
            <div>+</div>
          </span>
          <h2>배너 추가하기</h2>
        </div>
      </Link>
    </div>
  )
}

export default BannerManageCardAdd
