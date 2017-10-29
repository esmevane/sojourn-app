// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

const start = Theme.colors.accent
  .brighten(0.9)
  .desaturate(0.9)
  .alpha(0.9)
  .css()

export default styled.div`
  pointer-events: auto;
  position: relative;

  background: ${start};
  border-radius: ${Theme.sizes.tiny}px;
  box-shadow: 0 ${Theme.sizes.tiny}px ${Theme.sizes.small}px -${Theme
      .sizes.small * 0.4}px ${Theme.colors.black.alpha(0.3).css()};
  color: ${Theme.colors.white.alpha(0.95).css()};
  text-shadow: 0 ${Theme.sizes.tiny * 0.5}px
    ${Theme.sizes.tiny * 0.5}px ${Theme.colors.black
      .alpha(0.5)
      .css()};

  margin: 0 ${Theme.sizes.small}px ${Theme.sizes.base * 0.6}px;
  padding: ${Theme.sizes.small}px;
  min-width: ${Theme.sizes.giant * 6}px;
  max-width: ${Theme.sizes.giant * 16}px;
`
