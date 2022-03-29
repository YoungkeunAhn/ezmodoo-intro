import React from 'react'

type Props = {
  children: React.ReactChild
  title: string
}

function BannerManageLayout(props: Props) {
  const { children, title } = props

  return (
    <div>
      <header className='border-b'>
        <div className='max-w-[1150px] m-auto py-3'>
          <h1 className='font-bold text-lg'>Smart Banner Manage</h1>
        </div>
      </header>
      <main>
        <div className='max-w-[1150px] m-auto py-3'>
          <h2 className='font-bold text-2xl my-10'>{title}</h2>
          <div className='w-full'>{children}</div>
        </div>
      </main>
    </div>
  )
}

export default BannerManageLayout
