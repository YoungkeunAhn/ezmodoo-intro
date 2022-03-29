import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  data: BannerType
}

function BannerManageCard(props: Props) {
  const { data } = props
  const { title, bannerId, image, active } = data

  const onClick = () => {
    console.log(bannerId)
  }

  return (
    <div className='border rounded-lg overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all ease-out'>
      <header className='text-center font-bold w-full bg-[#FAFAFC] py-4'>
        {title}
      </header>
      <main className='flex flex-col items-center px-2'>
        <div className='py-2 space-x-2 border-b w-full flex justify-center items-center'>
          <span>활성여부</span>
          {active ? (
            <span className='bg-green-500 py-1 px-3 rounded-[40px] text-white text-sm'>
              활성
            </span>
          ) : (
            <span className='bg-red-500 py-1 px-3 rounded-[40px] text-white text-sm'>
              비활성
            </span>
          )}
        </div>
        <div className='flex flex-col items-center'>
          <span className='my-5'>적용 이미지</span>
          <img src={image} alt='banner thumbnail object-contain' />
        </div>
        <div className='py-4 w-full flex justify-center'>
          <Link to={`edit/${bannerId}`}>
            <button
              onClick={onClick}
              className='border border-black rounded-md py-2 px-4 hover:bg-gray-400 hover:text-white transition-all ease-out'
            >
              관리하기
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default BannerManageCard
