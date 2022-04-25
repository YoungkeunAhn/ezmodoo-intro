import BannerSection from 'components/main-section/banner-section/BannerSection'
import CardSection from 'components/card-section/CardSection'
import CoupangSection from 'components/main-section/coupang-section/CoupangSection'
import Footer from 'components/footer/Footer'
import EesSection from 'components/main-section/ees-section/EesSection'
import FulfillmentSection from 'components/main-section/fulfillment-section/FulfillmentSection'
import OperationSection from 'components/main-section/operation-section/OperationSection'
import SellerSection from 'components/main-section/seller-section/SellerSection'
import SellerSubSection from 'components/main-section/seller-sub-section/SellerSubSection'
import MainLayout from 'layout/MainLayout'
import 'aos/dist/aos.css'
import React from 'react'

function Main() {
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

export default Main
