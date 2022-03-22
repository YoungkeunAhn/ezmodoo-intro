import React from 'react'
import FooterTextRow from './text-row/FooterTextRow'

function Footer() {
  return (
    <footer
      className='p-10 text-white flex flex-col items-center justify-center'
      style={{
        background: 'url(footer_bg.png)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img src='white_logo.png' alt='white logo' width={150} />
      <div className='mt-12 flex flex-col items-center space-y-1'>
        <div className='flex justify-center items-start space-x-7'>
          <FooterTextRow title='company' content='LKR' />
          <FooterTextRow title='business license' content='208-86-02402' />
        </div>
        <div className='flex justify-center items-start space-x-7'>
          <FooterTextRow title='tel' content='+82-2-1833-9540(TEL)' />
          <FooterTextRow title='fax' content='+82-31-624-2227' />
        </div>
        <div className='flex justify-center items-start space-x-7'>
          <FooterTextRow
            title='address'
            content='402,PLAZA15, Eumnae-ro, Deogyang-gu, Goyang-si, Gyeonggi-do, Republic of Korea'
          />
        </div>
        <p className='text-xs'>Copyright© 2021 LKR All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
