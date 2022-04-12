import DataInputLayoutButton from 'components/data-input-layout-button/DataInputLayoutButton'
import ExtraPageCardItem from 'components/extra-page-card-item/ExtraPageCardItem'
import MExtraPageColorFrame from 'components/m-extra-page-frame/m-extra-page-color-frame/MExtraPageColorFrame'
import MExtraPageTopFrame from 'components/m-extra-page-frame/m-extra-page-top-frame/MExtraPageTopFrame'
import React from 'react'
import DataInputLayout from './DataInputLayout'

type Props = {
  data: ExtraPageType
}

function ExtraPageLayout(props: Props) {
  const { data } = props
  const { title, cardList, image, color, stepList, mColorFrameData } = data
  return (
    <DataInputLayout button={<DataInputLayoutButton />}>
      <div className="flex flex-col items-left">
        <h1 className="text-center font-bold text-2xl mb-14 hidden md:block">
          {title}
        </h1>
        <div className="mb-20 hidden md:block">
          <div className="relative flex flex-col">
            <div className="flex space-x-4 px-4 z-30">
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

        <MExtraPageTopFrame cardList={cardList} color={color} />
        <img src={image} alt="service step" className="mb-14 hidden md:block" />
        <MExtraPageColorFrame data={mColorFrameData} />

        <div className="flex flex-col px-4 mt-10 md:mt-0">
          {stepList.map((step, idx) => (
            <div
              key={idx}
              className="flex text-sm md:text-base leading-6 md:leading-10"
            >
              <div className="mr-4">{idx + 1}</div>
              <div
                dangerouslySetInnerHTML={{ __html: step }}
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
