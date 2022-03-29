import AccessionStep from 'pages/accession-step/AccessionStep'
import ChargeInfomation from 'pages/charge-infomation/ChargeInfomation'
import ExtraChinaImport from 'pages/extra-china-import/ExtraChinaImport'
import ExtraDesign from 'pages/extra-design/ExtraDesign'
import Error404 from 'pages/error404/Error404'
import Faq from 'pages/faq/Faq'
import ExtraForward from 'pages/extra-forward/ExtraForward'
import Join from 'pages/join/Join'
import Main from 'pages/main/Main'
import Notice from 'pages/notice/Notice'
import Question from 'pages/question/Question'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BannerManage from 'pages/banner-manage/BannerManage'
import BannerEdit from 'pages/banner-edit/BannerEdit'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/charge-infomation' element={<ChargeInfomation />} />
        <Route path='/accession-step' element={<AccessionStep />} />
        <Route path='/design' element={<ExtraDesign />} />
        <Route path='/china-import' element={<ExtraChinaImport />} />
        <Route path='/forward' element={<ExtraForward />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/question' element={<Question />} />
        <Route path='/join' element={<Join />} />
        <Route path='/banner-manage' element={<BannerManage />} />
        <Route path='/banner-manage/edit' element={<BannerEdit />} />
        <Route path='/banner-manage/edit/:id' element={<BannerEdit />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
