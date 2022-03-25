import AccessionStep from 'pages/accession-step/AccessionStep'
import ChargeInfomation from 'pages/charge-infomation/ChargeInfomation'
import ChinaImport from 'pages/china-import/ChinaImport'
import DirectDesign from 'pages/direct-design/DirectDesign'
import Error404 from 'pages/error404/Error404'
import Faq from 'pages/faq/Faq'
import Forward from 'pages/forward/Forward'
import Join from 'pages/join/Join'
import Main from 'pages/main/Main'
import Notice from 'pages/notice/Notice'
import Question from 'pages/question/Question'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/charge-infomation' element={<ChargeInfomation />} />
        <Route path='/accession-step' element={<AccessionStep />} />
        <Route path='/design' element={<DirectDesign />} />
        <Route path='/china-import' element={<ChinaImport />} />
        <Route path='/forward' element={<Forward />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/question' element={<Question />} />
        <Route path='/join' element={<Join />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
