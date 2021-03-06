import PlusCircle from 'asset/PlusCircle'
import LoginBox from 'common/login-box/LoginBox'
import { headerContent, topMenu } from 'data/top-menu'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
}

function TopMenu(props: Props) {
  const { className } = props
  const [loginOpen, setLoginOpen] = useState<boolean>(false)

  const openLogin = () => {
    setLoginOpen(!loginOpen)
  }

  const [topMenuOver, setTopMenuOver] = useState<boolean>(false)

  return (
    <>
      <div className={className}>
        <div
          className={`p-5 bg-[#E3EAF1] relative flex justify-center border-b`}
        >
          <p className='text-[#888] text-sm'>{headerContent.title}</p>
          <div className='flex justify-center items-center absolute right-4 lg:right-[16%] space-x-2'>
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
      </div>

      <div
        className={`sticky top-0 z-50 w-full bg-white ${className}`}
        onMouseOver={(e) => {
          e.stopPropagation()
          setTopMenuOver(true)
        }}
        onMouseOut={() => setTopMenuOver(false)}
      >
        {/* 메인메뉴 */}
        <ul className='flex justify-center items-center bg-white hover:cursor-pointer max-w-[1350px] m-auto relative'>
          <li className='w-full flex justify-center'>
            <Link to='/'>
              <img
                src='logo.png'
                alt='모두편해'
                className='h-4 lg:h-7 object-contain'
              />
            </Link>
          </li>
          {topMenu.map((menu, idx) => (
            <li
              key={idx}
              className='flex justify-left items-center w-full px-1 py-4'
              onMouseOver={(e) => {
                if (idx === topMenu.length - 1) {
                  e.stopPropagation()
                  setTopMenuOver(false)
                  return false
                }
              }}
            >
              <div
                className='md:text-sm lg:text-lg font-bold ml-5 flex items-center justify-cetner text-center w-full'
                onClick={() => menu.title === '로그인' && openLogin()}
              >
                <span className='w-full text-center flex justify-center items-center'>
                  {menu.title === '로그인' && (
                    <img
                      src='login_icon.png'
                      alt='login icon'
                      className='object-contain'
                    />
                  )}
                  {menu.title}
                </span>
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
              <button className='inline-block px-3 lg:px-6 py-2.5 bg-[#7FA2C2] text-white text-sm lg:text-md leading-tight uppercase rounded-[40px] shadow-md hover:bg-[#6286A7] hover:shadow-lg focus:bg-[#6286A7] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#6286A7] active:shadow-lg transition duration-150 ease-in-out'>
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
            <LoginBox open={loginOpen} />
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
            className={`w-full flex justify-center align-top bg-white  duration-500 pt-2 pb-2 max-w-[1350px]`}
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
                      <div
                        className={`box-border text-sm ml-[24px] p-1 hover:cursor-pointer hover:font-bold hover:text-[#7FA2C2] hover:underline decoration-1 flex ${
                          menu.title === '고객지원' ? 'pl-10' : 'pl-7'
                        }`}
                      >
                        {sub.title === '전체서비스' && (
                          <span>
                            <PlusCircle />
                          </span>
                        )}
                        <span className='w-full'>{sub.title}</span>
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
