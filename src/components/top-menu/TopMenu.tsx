import PlusCircle from 'asset/PlusCircle'
import LoginBox from 'common/login-box/LoginBox'
import { headerContent, topMenu } from 'data/top-menu'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function TopMenu() {
  const [loginOpen, setLoginOpen] = useState<boolean>(false)

  const openLogin = () => {
    setLoginOpen(!loginOpen)
  }

  const onLogin = () => {
    setLoginOpen(false)
  }
  const [topMenuOver, setTopMenuOver] = useState<boolean>(false)

  return (
    <>
      <div className='p-5 bg-[#E3EAF1] relative flex justify-center border-b'>
        <p className='text-[#888] text-sm'>{headerContent.title}</p>
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
        className='sticky top-0 z-50 w-full bg-white'
        onMouseOver={(e) => {
          e.stopPropagation()
          setTopMenuOver(true)
        }}
        onMouseOut={() => setTopMenuOver(false)}
      >
        {/* 메인메뉴 */}
        <ul className='flex justify-center items-center p-3 bg-white hover:cursor-pointer max-w-[1350px] m-auto space-x-4 relative'>
          <li className='w-full flex justify-center'>
            <Link to='/'>
              <img src='logo.png' alt='모두편해' className='h-7' />
            </Link>
          </li>
          {topMenu.map((menu, idx) => (
            <li
              key={idx}
              className='flex justify-left items-center p-1 w-full'
              onMouseOver={(e) => {
                if (idx === topMenu.length - 1) {
                  e.stopPropagation()
                  setTopMenuOver(false)
                  return false
                }
              }}
            >
              <div
                className='text-lg font-bold ml-5 flex items-center justify-left'
                onClick={() => menu.title === '로그인' && openLogin()}
              >
                {menu.title === '로그인' && (
                  <img
                    src='login_icon.png'
                    alt='login icon'
                    className='object-contain mr-1'
                  />
                )}
                {menu.title}
              </div>
            </li>
          ))}
          <li
            className='w-full flex justify-center'
            onMouseOver={(e) => {
              e.stopPropagation()
              setTopMenuOver(false)
              return false
            }}
          >
            <Link to='/join'>
              <button className='inline-block px-6 py-2.5 bg-[#7FA2C2] text-white font-medium text-md leading-tight uppercase rounded-[40px] shadow-md hover:bg-[#6286A7] hover:shadow-lg focus:bg-[#6286A7] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#6286A7] active:shadow-lg transition duration-150 ease-in-out'>
                무료체험신청
              </button>
            </Link>
          </li>
          <div
            onMouseOver={(e) => {
              e.stopPropagation()
              setTopMenuOver(false)
              return false
            }}
          >
            <LoginBox open={loginOpen} onLogin={onLogin} />
          </div>
        </ul>

        {/* 서브메뉴 */}
        <div
          className='w-full flex justify-center absolute z-50 border-t-2 border-b overflow-hidden border-[#7FA2C2]'
          style={{
            transition: 'all 0.5s',
            height: topMenuOver ? '300px' : 0,
            opacity: topMenuOver ? 1 : 0,
            background: '#fff',
          }}
        >
          <ul
            className={`w-full flex justify-center align-top bg-white  duration-500 pt-2 pb-2 max-w-[1350px] space-x-4`}
          >
            <li className='w-full'></li>
            {topMenu.map((menu, idx) => (
              <li
                key={idx}
                className='flex flex-col items-left w-full'
                onMouseOver={(e) => {
                  if (idx > topMenu.length - 2) {
                    e.stopPropagation()
                    setTopMenuOver(false)
                    return false
                  }
                }}
              >
                {menu.subTitle.length !== 0 &&
                  menu.subTitle.map((sub, idx) => (
                    <Link to={sub.url} key={idx}>
                      <div className='box-border text-sm ml-[24px] p-1 hover:cursor-pointer hover:font-bold hover:text-[#7FA2C2] hover:underline decoration-1 flex'>
                        {sub.title === '전체서비스' && (
                          <span>
                            <PlusCircle />
                          </span>
                        )}
                        {sub.title}
                      </div>
                    </Link>
                  ))}
              </li>
            ))}
            <li
              className='w-full'
              onMouseOver={(e) => {
                e.stopPropagation()
                setTopMenuOver(false)
                return false
              }}
            ></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default TopMenu
