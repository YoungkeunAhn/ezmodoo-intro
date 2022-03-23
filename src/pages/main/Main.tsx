import BannerSection from 'components/banner-section/BannerSection'
import CardSection from 'components/card-section/CardSection'
import CoupangSection from 'components/coupang-section/CoupangSection'
import EesSection from 'components/ees-section/EesSection'
import Footer from 'components/footer/Footer'
import FulfillmentSection from 'components/fulfillment-section/FulfillmentSection'
import OperationSection from 'components/operation-section/OperationSection'
import SellerSection from 'components/seller-section/SellerSection'
import SellerSubSection from 'components/seller-sub-section/SellerSubSection'
import MainLayout from 'layout/MainLayout'
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
