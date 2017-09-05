// @flow

import React from 'react'

const maybeFirstChild = children =>
  React.Children.toArray(children)[0] || <div />

const maybeSecondChild = children =>
  React.Children.toArray(children)[1] || <div />

const Maybe = (props: any): React$Element<any> =>
  props.condition(props)
    ? maybeFirstChild(props.children)
    : maybeSecondChild(props.children)

export default Maybe
