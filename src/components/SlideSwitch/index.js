// @flow

import React from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import SwitchLifecycle from './SwitchLifecycle'

const SlideSwitch = (
  { children, location }: HasChildren & HasLocation
): React$Element<any> =>
  <TransitionGroup>
    <SwitchLifecycle key={ location.key } location={ location }>
      { children }
    </SwitchLifecycle>
  </TransitionGroup>

export default SlideSwitch
