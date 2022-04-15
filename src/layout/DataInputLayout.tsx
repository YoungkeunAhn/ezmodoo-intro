import React from 'react'

type Props = {
  children: React.ReactChild
  button: React.ReactChild
  extra?: boolean
}

function DataInputLayout(props: Props) {
  const { children, button, extra } = props
  return (
    <div>
      <header className='bg-[#39668F] h-[4rem] md:h-[6rem] rounded-t-xl flex justify-center items-center'>
        <img
          src='white_logo.png'
          alt='white logo'
          className='w-[93px] md:w-[130px] object-contain '
        />
      </header>
      <main className='bg-white flex justify-center items-center py-8 md:py-20'>
        <div className={`${extra ? 'max-w-[978px]' : 'w-full max-w-[54rem]'}`}>
          {children}
        </div>
      </main>
      <footer className='bg-[#39668F] h-[5rem] rounded-b-xl flex justify-center items-center text-[#39668F] text-xl text-center md:text-2xl md:h-[6rem]'>
        {button}
      </footer>
    </div>
  )
}

export default DataInputLayout
