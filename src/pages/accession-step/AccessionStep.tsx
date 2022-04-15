import ExperienceBtn from 'common/experience-btn/ExperienceBtn'
import { accessionStepContent } from 'data/accession-step'
import { accessionStepPageHeader } from 'data/page'
import PageLayout from 'layout/PageLayout'
import React from 'react'

function AccessionStep() {
  return (
    <PageLayout header={accessionStepPageHeader}>
      <div>
        <div className='hidden md:flex justify-between items-center border-dashed border-2 rounded-2xl bg-white border-[#FF9600] p-8'>
          {accessionStepContent.map((step, idx) => (
            <>
              <div className='flex flex-col items-center'>
                <img src={step.image} alt='accession stpe' className='mb-3' />
                <span
                  className='text-sm md:text-base text-[#777] text-center'
                  dangerouslySetInnerHTML={{ __html: step.text }}
                ></span>
              </div>
              {idx < 3 && (
                <img
                  src='arrow_right.png'
                  alt='arrow right'
                  className='object-contain w-9 h-9'
                />
              )}
            </>
          ))}
        </div>
        <div className='grid grid-flow-row grid-cols-2 w-full gap-2 border-dashed border-2 rounded-2xl bg-white border-[#FF9600] p-4'>
          {accessionStepContent.map((step, idx) => (
            <div key={idx} className='flex flex-col justify-center'>
              <img src={step.mImage} alt={step.text} className='w-full' />
              <span
                className='text-center -translate-x-5 text-sm mt-3'
                dangerouslySetInnerHTML={{ __html: step.text }}
              ></span>
            </div>
          ))}
        </div>
        <ExperienceBtn />
      </div>
    </PageLayout>
  )
}

export default AccessionStep
