import { headerContent, topMenu } from 'data/top-menu'
import React, { useState } from 'react'

function TopMenu() {
  const [topMenuOver, setTopMenuOver] = useState<boolean>(false)

  return (
    <>
      <div className='p-5 bg-[#E3EAF1] relative flex justify-center'>
        <p>{headerContent.title}</p>
        <div className='flex justify-center items-center absolute right-[16%] space-x-2'>
          {headerContent.icons.map((icon, idx) => (
            <a href={icon.url} key={idx}>
              <img
                className={idx === 3 ? 'w-5 h-4' : 'w-5 h-5'}
                src={icon.image}
                alt={icon.alt}
              />
            </a>
          ))}
          <span className='text-xs text-gray-400'>
            {headerContent.channelName}
          </span>
        </div>
      </div>

      <div
        onMouseOver={() => setTopMenuOver(true)}
        onMouseOut={() => setTopMenuOver(false)}
        className='sticky top-0 z-50 w-full bg-white'
      >
        {/* 메인메뉴 */}
        <ul className='flex justify-around items-center p-3 bg-white hover:cursor-pointer max-w-[1350px] m-auto'>
          <li className='w-full flex justify-center'>
            <img src='logo.png' alt='logo' className='h-7' />
          </li>
          {topMenu.map((menu, idx) => (
            <li
              key={idx}
              className='flex justify-center items-center p-1 w-full'
            >
              <div className='text-lg font-bold ml-5'>{menu.title}</div>
            </li>
          ))}
          <li className='w-full flex justify-center'>
            <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
              무료체험신청
            </button>
          </li>
        </ul>

        {/* 서브메뉴 */}
        <div
          className='w-full flex justify-center absolute z-50 border-t-2 overflow-hidden border-[#7FA2C2]'
          style={{
            transition: 'all 0.5s',
            height: topMenuOver ? '35vh' : 0,
            opacity: topMenuOver ? 1 : 0,
            background: '#fff',
          }}
        >
          <ul
            className={`w-full flex justify-around align-top bg-white  duration-500 pt-2 pb-2 max-w-[1350px]`}
          >
            <li className='w-full'></li>
            {topMenu.map((menu, idx) => (
              <li key={idx} className='flex flex-col items-left w-full'>
                {menu.subTitle.length !== 0 &&
                  menu.subTitle.map((sub, idx) => (
                    <div
                      className='box-border text-sm ml-[48px] p-1 hover:cursor-pointer hover:font-bold hover:text-[#7FA2C2] hover:underline decoration-1'
                      key={idx}
                    >
                      {sub.title}
                    </div>
                  ))}
              </li>
            ))}
            <li className='w-full'></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default TopMenu
