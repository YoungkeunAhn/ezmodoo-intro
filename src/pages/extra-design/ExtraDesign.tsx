import { extraDesign } from 'data/extraService'
import { designPageHeader } from 'data/page'
import ExtraPageLayout from 'layout/ExtraPageLayout'
import PageLayout from 'layout/PageLayout'
import React from 'react'

function ExtraDesign() {
  return (
    <PageLayout header={designPageHeader}>
      <ExtraPageLayout data={extraDesign} />
    </PageLayout>
  )
}

export default ExtraDesign
