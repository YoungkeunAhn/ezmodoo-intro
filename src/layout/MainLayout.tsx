import ScrollTopBtn from 'common/scroll-top-btn/ScrollTopBtn'
import SmTopMenu from 'components/top-menu/sm-top-menu/SmTopMenu'
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
      <SmTopMenu className='block lg:hidden' />
      <main>{children}</main>
      <ScrollTopBtn />
    </div>
  )
}

export default MainLayout
