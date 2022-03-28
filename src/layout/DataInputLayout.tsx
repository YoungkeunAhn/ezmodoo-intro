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
      <header className='bg-[#39668F] h-[6rem] rounded-t-xl flex justify-center items-center'>
        <img src='white_logo.png' alt='white logo' width={130} />
      </header>
      <main className='bg-white flex justify-center items-center py-20'>
        <div className={`${extra ? 'max-w-[978px]' : 'max-w-[54rem]'}`}>
          {children}
        </div>
      </main>
      <footer className='bg-[#39668F] h-[6rem] rounded-b-xl flex justify-center items-center text-[#39668F] font-bold text-2xl text-center'>
        {button}
      </footer>
    </div>
  )
}

export default DataInputLayout
