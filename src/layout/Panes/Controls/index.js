// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()

export const Controls = styled.div`
  grid-area: controls;

  border-radius: ${Theme.sizes.tiny}px ${Theme.sizes.tiny}px 0 0;
  background-color: ${Theme.colors.white.css()};
  color: ${Theme.colors.black.alpha(0.5).css()};

  .button {
    cursor: pointer;

    color: ${Theme.colors.black.alpha(0.2).css()};
    height: ${Theme.sizes.base}px;

    transition: ${Theme.transition.duration};

    margin-right: ${Theme.sizes.tiny}px;

    :hover {
      color: ${Theme.colors.black.alpha(0.5).css()};
    }
  }
`
