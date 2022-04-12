import ScrollTopBtn from 'common/sroll-top-btn/ScrollTopBtn'
import Footer from 'components/footer/Footer'
import MTopMenu from 'components/m-top-menu/MTopMenu'
import TopMenu from 'components/top-menu/TopMenu'
import React from 'react'

type Props = {
  header: PageType
  children: React.ReactChild
}

function PageLayout(props: Props) {
  const { children, header } = props
  const { title, engTitle, summary, bgImage, mBgImage } = header

  return (
    <div>
      <TopMenu className="hidden lg:block" />
      <MTopMenu className="block lg:hidden" />
      <div
        className="px-4 lg:px-0 hidden md:block"
        style={{ background: `url(${bgImage})`, backgroundRepeat: 'no-repeat' }}
      >
        <div className="max-w-[1150px] flex items-center justify-start m-auto h-96">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">{title}</h1>
        </div>
      </div>
      <div
        className="px-4 lg:px-0 md:hidden"
        style={{
          background: `url(${mBgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[1150px] flex items-center justify-start m-auto h-96">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">{title}</h1>
        </div>
      </div>
      <div className="py-8 lg:py-28 bg-[#F4F5F8]">
        <div className="max-w-[1150px] m-auto px-4 lg:px-0">
          <div>
            <h3 className="text-[#777] text-md text-center hidden lg:block">
              {engTitle}
            </h3>
            <h2 className="text-6xl font-bold text-center mt-5 mb-16 hidden lg:block">
              {title}
            </h2>
            <div
              className="text-black lg:text-[#777] text-2xl text-center m-14"
              dangerouslySetInnerHTML={{ __html: summary }}
            ></div>
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
