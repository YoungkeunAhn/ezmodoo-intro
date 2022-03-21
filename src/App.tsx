import BannerSection from 'components/banner-section/BannerSection'
import Footer from 'components/footer/Footer'
import OperationSection from 'components/operation-section/OperationSection'
import MainLayout from 'layout/MainLayout'
import React from 'react'

function App() {
  return (
    <MainLayout>
      <div>
        <BannerSection />
        <OperationSection />
        <Footer />
      </div>
    </MainLayout>
  )
}

export default App
