import React from 'react'
import { Link } from 'react-router-dom'

function ExperienceBtn() {
  return (
    <Link to='/question'>
      <div className='text-2xl md:text-5xl font-bold text-white bg-[#294551] p-5 md:py-10 flex justify-center items-center w-full md:w-[50rem] m-auto rounded-[200px] mt-10 md:mt-20 cursor-pointer hover:bg-[#3d687a] transition-[0.3s]'>
        <span>1개월 무료체험 신청하기</span>
      </div>
    </Link>
  )
}

export default ExperienceBtn
