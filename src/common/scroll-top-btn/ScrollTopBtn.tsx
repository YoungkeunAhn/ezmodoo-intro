import React from 'react'

function ScrollTopBtn() {
  const scrollTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 })
  }
  return (
    <div
      className='fixed right-0 bottom-10 p-2 w-16 rounded-l-3xl text-white bg-[#39668F] text-xs md:text-sm text-center cursor-pointer font-bold z-50'
      onClick={scrollTop}
    >
      TOP ↑
    </div>
  )
}

export default ScrollTopBtn
