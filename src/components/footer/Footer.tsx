import React from 'react'
import FooterTextRow from './text-row/FooterTextRow'

function Footer() {
  return (
    <footer
      className='p-10 text-white flex flex-col items-center justify-center'
      style={{
        background: 'url(A01.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '200%',
        backgroundPosition: 'bottom 0px right 80%',
      }}
    >
      <img src='white_logo.png' alt='white logo' width={150} />
      <div className='mt-8 flex flex-col items-center space-y-1'>
        <div className='flex justify-center items-start space-x-7'>
          <FooterTextRow title='compony' content='LKR' />
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
        <p>Copyright© 2021 LKR All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
