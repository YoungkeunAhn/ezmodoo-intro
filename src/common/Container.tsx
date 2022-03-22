import React from 'react'

type Props = {
  sectionId?: string
  children: React.ReactNode
  flexDirection?: 'column' | 'row'
  noFixedHeight?: true
}
function Container(props: Props) {
  const { children, sectionId, flexDirection, noFixedHeight } = props

  return (
    <section
      id={sectionId}
      className={`bg-[#F4F5F8] ${
        noFixedHeight ? '' : 'h-[40rem]'
      }  flex justify-center items-center box-border`}
    >
      <div
        className={`max-w-screen-lg flex flex-1 ${
          flexDirection === 'column' ? 'flex-col' : 'flex-row'
        } justify-center m-auto`}
      >
        {children}
      </div>
    </section>
  )
}

export default Container
