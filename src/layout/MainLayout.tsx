import ScrollTopBtn from 'common/sroll-top-btn/ScrollTopBtn'
import MTopMenu from 'components/m-top-menu/MTopMenu'
import TopMenu from 'components/top-menu/TopMenu'
import React from 'react'

type Props = {
  children: React.ReactNode
}

function MainLayout(props: Props) {
  const { children } = props

  return (
    <div>
      <TopMenu className='hidden lg:block' />
      <MTopMenu className='block lg:hidden' />
      <main>{children}</main>
      <ScrollTopBtn />
    </div>
  )
}

export default MainLayout
