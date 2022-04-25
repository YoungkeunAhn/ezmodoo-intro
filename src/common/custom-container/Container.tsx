import Aos from 'aos'
import React, { useEffect } from 'react'

type Props = {
  sectionId?: string
  children: React.ReactNode
  flexDirection?: 'column' | 'row'
  noFixedHeight?: true
  noBg?: true
}
function Container(props: Props) {
  const { children, sectionId, flexDirection, noFixedHeight, noBg } = props

  useEffect(() => {
    Aos.init()
  })

  return (
    <section
      id={sectionId}
      className={`${noBg ? '' : 'bg-[#F4F5F8]'} ${
        noFixedHeight ? 'h-fit' : 'lg:h-[40rem]'
      }  flex justify-center items-center box-border py-0 sm:py-10 md:py-0`}
      data-aos='fade-up'
    >
      <div
        className={`max-w-[1150px] flex flex-1 ${
          flexDirection === 'column' ? 'flex-col' : 'flex-row'
        } justify-center m-auto`}
      >
        {children}
      </div>
    </section>
  )
}

export default Container
