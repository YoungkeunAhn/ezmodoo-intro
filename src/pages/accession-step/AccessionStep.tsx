import ExperienceBtn from 'common/experience-btn/ExperienceBtn'
import { accessionStepContent } from 'data/accession-step'
import { accessionStepPageHeader } from 'data/page'
import PageLayout from 'layout/PageLayout'
import React from 'react'

function AccessionStep() {
  return (
    <PageLayout header={accessionStepPageHeader}>
      <div>
        <div className='border-dashed border-2 rounded-2xl flex justify-between items-center bg-white border-[#FF9600] p-8'>
          {accessionStepContent.map((step, idx) => (
            <>
              <div className='flex flex-col items-center'>
                <img src={step.image} alt='accession stpe' className='mb-3' />
                <span
                  className='text-[#777] text-center'
                  dangerouslySetInnerHTML={{ __html: step.text }}
                ></span>
              </div>
              {idx < 3 && (
                <img
                  src='arrow_right.png'
                  alt='arrow right'
                  className='object-contain'
                />
              )}
            </>
          ))}
        </div>
        <ExperienceBtn />
      </div>
    </PageLayout>
  )
}

export default AccessionStep
