import React from 'react'
import FooterTextRow from './text-row/FooterTextRow'

function Footer() {
  return (
    <footer
      className='py-6 px-2 md:p-10 text-white flex flex-col items-center justify-center'
      style={{
        background: 'url(footer_bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <img
        src='white_logo.png'
        alt='white logo'
        className='w-[80px] md:w-[150px]'
      />
      <div className='mt-8 md:mt-12 flex flex-col items-center space-y-1'>
        <div className='flex justify-center items-start space-x-7'>
          <FooterTextRow title='company' content='LKR' />
          <FooterTextRow title='business license' content='208-86-02402' />
        </div>
        <div className='flex justify-center items-start space-x-7'>
          <FooterTextRow title='tel' content='+82-2-1833-9540' />
          <FooterTextRow title='fax' content='+82-31-624-2227' />
        </div>
        <div className='flex justify-center items-start space-x-7'>
          <FooterTextRow
            title='address'
            content='402, 15, Eumnae-ro, Deogyang-gu, Goyang-si, Gyeonggi-do, Korea'
          />
        </div>
        <p className='text-xs'>Copyright© 2021 LKR All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
