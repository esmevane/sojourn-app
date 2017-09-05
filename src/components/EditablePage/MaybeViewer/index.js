// @flow

import React from 'react'
import { connectPage } from 'state/connectors'
import Maybe from 'components/Maybe'
import Invitation from '../Invitation'
import Viewer from '../Viewer'

export const MaybeViewer = (props: any): React$Element<any> => {
  const condition = () => props.page !== undefined

  return (
    <Maybe condition={condition}>
      <Viewer {...props} />
      <Invitation {...props} />
    </Maybe>
  )
}

export default connectPage(MaybeViewer)
