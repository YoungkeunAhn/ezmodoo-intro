import { extraForward } from 'data/extraService'
import { forwardPageHeader } from 'data/page'
import ExtraPageLayout from 'layout/ExtraPageLayout'
import PageLayout from 'layout/PageLayout'
import React from 'react'

function ExtraForward() {
  return (
    <PageLayout header={forwardPageHeader}>
      <ExtraPageLayout data={extraForward} />
    </PageLayout>
  )
}

export default ExtraForward
