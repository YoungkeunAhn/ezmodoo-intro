import BannerSection from 'components/banner-section/BannerSection'
import OperationSection from 'components/operation-section/OperationSection'
import MainLayout from 'layout/MainLayout'
import React from 'react'

function App() {
  return (
    <MainLayout>
      <div>
        <BannerSection />
        <OperationSection />
        <div className='w-full h-screen'></div>
        <div className='w-full h-screen'></div>
        <div className='w-full h-screen'></div>
      </div>
    </MainLayout>
  )
}

export default App
