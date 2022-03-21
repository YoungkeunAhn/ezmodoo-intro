import { headerContent, topMenu } from 'data/top-menu'
import React, { useState } from 'react'

function TopMenu() {
  const [topMenuOver, setTopMenuOver] = useState<boolean>(false)

  return (
    <>
      <div className='p-5 bg-[#E3EAF1] relative flex justify-center'>
        <p>{headerContent.title}</p>
        <div className='flex justify-center items-center absolute right-[10%] space-x-4'>
          {headerContent.icons.map((icon, idx) => (
            <a href={icon.url} key={idx}>
              <img
                className={idx === 3 ? 'w-7 h-5' : 'w-7 h-7'}
                src={icon.image}
                alt={icon.alt}
              />
            </a>
          ))}
          <span>{headerContent.channelName}</span>
        </div>
      </div>

      <div
        onMouseOver={() => setTopMenuOver(true)}
        onMouseOut={() => setTopMenuOver(false)}
        className='sticky top-0 z-50'
      >
        {/* 메인메뉴 */}
        <ul className='flex justify-around items-center p-3 bg-white hover:cursor-pointer'>
          <li className='w-full flex justify-center'>
            <img src='logo.png' alt='logo' className='h-7' />
          </li>
          {topMenu.map((menu, idx) => (
            <li
              key={idx}
              className='flex justify-center items-center p-1 w-full'
            >
              <div className='text-lg'>{menu.title}</div>
            </li>
          ))}
          <li className='w-full flex justify-center'>
            <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
              무료체험신청
            </button>
          </li>
        </ul>

        {/* 서브메뉴 */}
        <ul
          className={`w-full flex justify-around align-top absolute z-50 bg-white border-t overflow-hidden duration-500 pt-2 pb-2`}
          style={{
            transition: 'all 0.5s',
            height: topMenuOver ? '50vh' : 0,
            opacity: topMenuOver ? 1 : 0,
          }}
        >
          <li className='w-full'></li>
          {topMenu.map((menu, idx) => (
            <li key={idx} className='flex flex-col items-center w-full'>
              {menu.subTitle.length !== 0 &&
                menu.subTitle.map((sub, idx) => (
                  <div
                    className='text-center box-border hover:cursor-pointer p-2'
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
    </>
  )
}

export default TopMenu
