// @flow

import styled from 'styled-components'
import createTheme from 'themes'

const Theme = createTheme()
const barSize = `minmax(${Theme.sizes.large}px, ${Theme.sizes
  .giant}px)`

export const Layout = styled.div`
  pointer-events: none;
  position: absolute;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-areas: 'header header header' 'aside main sidebar'
    'footer footer footer';
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: ${barSize} auto ${barSize};
  transition: ${Theme.transition.duration};
`

export const Footer = styled.footer`
  pointer-events: auto;

  grid-area: footer;

  background-color: ${Theme.colors.black.alpha(0.25).css()};
  border-top: ${Theme.sizes.lines.thin}px solid
    ${Theme.colors.black.alpha(0.15).css()};
  color: ${Theme.colors.accent
    .brighten(3.25)
    .alpha(0.75)
    .css()};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.header`
  pointer-events: auto;

  grid-area: header;

  background-color: ${Theme.colors.white.css()};
  color: ${Theme.colors.black.alpha(0.5).css()};
  font-size: ${Theme.sizes.large}px;

  display: grid;
  grid-template-areas: 'menu center settings';
  grid-template-columns: ${Theme.sizes.giant}px auto
    ${Theme.sizes.giant}px;

  .button {
    color: ${Theme.colors.accent.alpha(0.5).css()};
    stroke-width: ${Theme.sizes.lines.thin}px;
  }
`

export const HeaderCenter = styled.div`
  pointer-events: none;

  grid-area: center;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderSettings = styled.div`
  grid-area: settings;

  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    cursor: pointer;
  }
`

export const Overlay = styled.div`
  pointer-events: ${props => (props.show ? 'auto' : 'none')};

  grid-area: header / header / footer / footer;

  background-color: ${Theme.colors.white.alpha(0.8).css()};
  opacity: ${props => (props.show ? 1 : 0)};
  transition: ${Theme.transition.duration};
`

export const Note = styled.div`
  pointer-events: auto;

  grid-area: main;

  background-color: ${Theme.colors.white
    .darken(0.2)
    .alpha(0.85)
    .css()};

  border-radius: ${Theme.sizes.tiny}px;
  border-top: ${Theme.sizes.lines.fat}px solid;
  border-image: linear-gradient(
      270deg,
      ${Theme.colors.accent.alpha(0.5).css()} 50%,
      ${Theme.colors.highlight.alpha(0.5).css()}
    )
    1;
  box-shadow: 0 ${Theme.sizes.tiny}px ${Theme.sizes.base}px -${Theme
      .sizes.base * 0.4}px ${Theme.colors.black.alpha(0.5).css()};

  display: grid;
  grid-template-areas: 'controls' 'content';
  grid-template-rows: ${Theme.sizes.large}px auto;

  margin: ${Theme.sizes.base}px;
  padding-bottom: ${Theme.sizes.tiny}px;
`

export const NoteControls = styled.div`
  background-color: ${Theme.colors.white};
  color: ${Theme.colors.black.alpha(0.5).css()};

  grid-area: controls;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  .button {
    cursor: pointer;

    color: ${Theme.colors.black.alpha(0.2).css()};
    height: ${Theme.sizes.base}px;
    stroke-width: ${Theme.sizes.lines.thin}px;

    transition: ${Theme.transition.duration};

    margin-right: ${Theme.sizes.tiny}px;

    :hover {
      color: ${Theme.colors.black.alpha(0.5).css()};
    }
  }
`

export const NoteContent = styled.div`
  grid-area: content;

  display: flex;
  justify-content: center;
  align-items: center;

  .filler {
    color: ${Theme.colors.accent.alpha(0.2).css()};
    stroke-width: ${Theme.sizes.lines.large}px;
    height: ${Theme.sizes.giant}px;
    width: ${Theme.sizes.giant}px;
  }
`
