import ExtraPageCardItem from 'components/extra-page-card-item/ExtraPageCardItem'
import React from 'react'
import DataInputLayout from './DataInputLayout'

type Props = {
  data: ExtraPageType
}

function ExtraPageLayout(props: Props) {
  const { data } = props
  const { title, cardList, image, color, stepList } = data
  return (
    <DataInputLayout
      button={
        <button className='bg-white w-40 rounded-3xl py-2 hover:bg-[#eee] cursor-pointer'>
          문의하기
        </button>
      }
      extra
    >
      <div className='flex flex-col items-left'>
        <h1 className='text-center font-bold text-2xl mb-14'>{title}</h1>
        <div className='mb-20'>
          <div className='relative flex flex-col'>
            <div className='flex space-x-4 px-4 z-30'>
              {cardList.map((card, idx) => (
                <ExtraPageCardItem key={idx} {...card} />
              ))}
            </div>
            <div
              className={`rounded-[40px] w-full h-[5rem] absolute`}
              style={{ background: color, bottom: -30 }}
            ></div>
          </div>
        </div>

        <img src={image} alt='service step' className='mb-14' />

        <div className='flex flex-col'>
          {stepList.map((step, idx) => (
            <div key={idx} className='flex'>
              <div className='mr-4 leading-10'>{idx + 1}</div>
              <div
                dangerouslySetInnerHTML={{ __html: step }}
                className='leading-10'
                style={{ wordBreak: 'keep-all' }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </DataInputLayout>
  )
}

export default ExtraPageLayout
