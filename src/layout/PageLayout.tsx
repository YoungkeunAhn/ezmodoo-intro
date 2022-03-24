import ScrollTopBtn from 'common/sroll-top-btn/ScrollTopBtn'
import Footer from 'components/footer/Footer'
import TopMenu from 'components/top-menu/TopMenu'
import React from 'react'

type Props = {
  header: PageType
  children: React.ReactChild
}

function PageLayout(props: Props) {
  const { children, header } = props
  const { title, engTitle, summary, bgImage } = header

  return (
    <div>
      <TopMenu />
      <div style={{ background: `url(${bgImage})` }}>
        <div className='max-w-[1150px] flex items-center justify-start m-auto h-96'>
          <h1 className='text-5xl font-bold text-white'>{title}</h1>
        </div>
      </div>
      <div className='py-28 bg-[#F4F5F8]'>
        <div className='max-w-[1150px] m-auto'>
          <div>
            <h3 className='text-[#777] text-md text-center'>{engTitle}</h3>
            <h2 className='text-5xl font-bold text-center mt-5 mb-16'>
              {title}
            </h2>
            <div className='text-[#777] text-2xl text-center m-14'>
              {summary}
            </div>
          </div>
          {children}
        </div>
      </div>
      <Footer />
      <ScrollTopBtn />
    </div>
  )
}

export default PageLayout
