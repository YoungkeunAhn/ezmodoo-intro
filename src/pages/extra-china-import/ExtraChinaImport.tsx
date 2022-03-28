import { extraChinaImport } from 'data/extraService'
import { ChinaImportPageHeader } from 'data/page'
import ExtraPageLayout from 'layout/ExtraPageLayout'
import PageLayout from 'layout/PageLayout'
import React from 'react'

function ExtraChinaImport() {
  return (
    <PageLayout header={ChinaImportPageHeader}>
      <ExtraPageLayout data={extraChinaImport} />
    </PageLayout>
  )
}

export default ExtraChinaImport
