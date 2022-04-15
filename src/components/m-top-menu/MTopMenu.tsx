import ChevronDown from 'asset/ChevronDown'
import ChevronUp from 'asset/ChevronUp'
import LoginBox from 'common/login-box/LoginBox'
import { mTopMemu } from 'data/top-menu'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
}

function MTopMenu(props: Props) {
  const { className } = props
  const [open, setOpen] = useState<boolean>(false)
  const [currentMenu, setCurrentMenu] = useState<string>('')
  const [openLogin, setLoginBox] = useState<boolean>(false)

  const openSubMenu = (title: string) => {
    if (currentMenu === title) {
      setCurrentMenu('')
    } else {
      setCurrentMenu(title)
    }
  }

  const openMenuList = () => {
    setOpen(!open)
  }

  const openLoginBox = () => {
    setLoginBox(!openLogin)
  }

  const closeLoginBox = () => {
    setLoginBox(false)
  }

  const goHome = () => {
    alert('x')
  }

  return (
    <div className={`${className} sticky z-50 top-0`}>
      <div className='relative'>
        <div className='bg-white flex justify-between p-5'>
          <div>
            <Link to='/'>
              <img
                src='logo.png'
                alt='모두편해'
                width={110}
                className='object-contain'
              />
            </Link>
          </div>
          <img
            src='m_menu_icon.png'
            alt='mobile menu icon'
            width={30}
            className='object-contain cursor-pointer'
            onClick={openMenuList}
          />
        </div>

        <div
          className={`absolute flex w-full`}
          style={{
            background: open ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
            transition: 'background .5s .5s ease-in-out',
          }}
        >
          <div
            className={`w-full flex-1 ${open ? 'h-screen' : 'h-0'}`}
            onClick={() => setOpen(false)}
          ></div>
          <div
            className={`w-[250px] bg-[#F4F5F8] overflow-hidden flex flex-col ${
              open ? 'h-screen' : 'h-0'
            }`}
            style={{ transition: 'height .8s ease-in-out' }}
          >
            <ul className='flex flex-col space-y-5 p-5 font-bold mt-10'>
              {mTopMemu.map((menu, idx) => (
                <li key={idx}>
                  <div
                    className='cursor-pointer flex justify-between items-center'
                    onClick={(e) =>
                      menu.subTitle.length === 0
                        ? (window.location.href = '/ezmodoo_intro')
                        : openSubMenu(menu.title)
                    }
                  >
                    <span>{menu.title}</span>
                    {menu.subTitle.length > 1 && currentMenu === menu.title ? (
                      <ChevronUp />
                    ) : menu.subTitle.length === 0 ? null : (
                      <ChevronDown />
                    )}
                  </div>
                  {menu.subTitle.length !== 0 && (
                    <ul
                      className={`px-2 flex flex-col items-start overflow-hidden box-border space-y-2 ${
                        currentMenu === menu.title
                          ? 'h-auto py-2 opacity-100'
                          : 'h-0 py-0 opacity-0'
                      }`}
                      style={{ transition: '.5s' }}
                    >
                      {menu.subTitle.map((sub, idx) => (
                        <Link to={sub.url} className='w-full'>
                          <li key={idx}>- {sub.title}</li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className='flex flex-col space-y-4 mt-5'>
              <Link to='/join'>
                <button className='w-2/3 rounded-r-[40px] bg-[#7FA2C2] text-white font-bold p-3 pl-6 text-left'>
                  무료체험신청하기
                </button>
              </Link>
              <button
                className='w-2/3 rounded-r-[40px] bg-[#39668F] text-white font-bold p-3 pl-6 text-left'
                onClick={openLoginBox}
              >
                모두편해 로그인
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='fixed w-full h-full top-0 left-0 justify-center items-center'
        style={{ zIndex: 9999999, display: openLogin ? 'flex' : 'none' }}
        onClick={closeLoginBox}
      >
        <div
          className='relative -top-[200px] -left-[43%]'
          onClick={(e) => e.stopPropagation()}
        >
          <LoginBox open={openLogin} />
        </div>
      </div>
    </div>
  )
}

export default MTopMenu
