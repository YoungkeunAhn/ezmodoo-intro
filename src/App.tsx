import BannerSection from 'components/banner-section/BannerSection'
import EesSection from 'components/ees-section/EesSection'
import CoupangSection from 'components/coupang-section/CoupangSection'
import Footer from 'components/footer/Footer'
import OperationSection from 'components/operation-section/OperationSection'
import MainLayout from 'layout/MainLayout'
import React from 'react'
import SellerSection from 'components/seller-section/SellerSection'
import SellerSubSection from 'components/seller-sub-section/SellerSubSection'
import FulfillmentSection from 'components/fulfillment-section/FulfillmentSection'
import CardSection from 'components/card-section/CardSection'

function App() {
  return (
    <MainLayout>
      <div>
        <BannerSection />
        <OperationSection />
        <EesSection />
        <CoupangSection />
        <SellerSection />
        <SellerSubSection />
        <FulfillmentSection />
        <CardSection />
        <Footer />
      </div>
    </MainLayout>
  )
}

export default App
