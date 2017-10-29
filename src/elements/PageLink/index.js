// @flow

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import createTheme from 'themes'

const Theme = createTheme()

export default styled(Link)`
  background-color: ${Theme.colors.white.alpha(0.7).css()};
  border-radius: ${Theme.sizes.tiny}px;
  box-shadow: 0 ${Theme.sizes.tiny}px ${Theme.sizes.small}px -${Theme
      .sizes.small * 0.4}px ${Theme.colors.black.alpha(0.3).css()};
  color: ${Theme.colors.black.alpha(0.9).css()};
  font-weight: 200;

  margin: 0 ${Theme.sizes.small}px ${Theme.sizes.base * 0.6}px;
  padding: ${Theme.sizes.base}px;

  text-decoration: none;
  transition: ${Theme.transition.duration};

  :hover {
    box-shadow: 0 ${Theme.sizes.tiny}px ${Theme.sizes.small + 2}px -${Theme
        .sizes.small * 0.2}px ${Theme.colors.black.alpha(0.3).css()};
  }
`
