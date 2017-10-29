// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export default styled.div`
  background: linear-gradient(
    270deg,
    ${Theme.colors.accent.alpha(0.5).css()} 50%,
    ${Theme.colors.highlight.alpha(0.5).css()}
  );

  height: 100%;
  width: 100%;
`
