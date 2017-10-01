// @flow

import styled from 'styled-components'

export const Layout = styled.div`
  pointer-events: none;
  position: absolute;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-areas: 'header header header' 'aside main sidebar'
    'footer footer footer';
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: minmax(30px, 40px) auto minmax(30px, 40px);
  transition: 0.3s ease-in-out;
`

export const Footer = styled.footer`
  pointer-events: auto;

  grid-area: footer;

  background-color: rgba(0, 0, 0, 0.25);
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(255, 200, 255, 0.9);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.header`
  pointer-events: auto;

  grid-area: header;

  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 0.5);
  font-size: 24px;

  display: grid;
  grid-template-areas: 'menu center settings';
  grid-template-columns: 40px auto 40px;

  .button {
    color: rgba(102, 77, 182, 0.5);
    stroke-width: 1px;
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

  background-color: rgba(255, 255, 255, 0.8);
  opacity: ${props => (props.show ? 1 : 0)};
  transition: 0.3s ease-in-out;
`

export const Note = styled.div`
  pointer-events: auto;

  grid-area: main;

  background-color: rgba(245, 245, 245, 0.85);
  border-radius: 3px;
  border-top: 6px solid transparent;
  border-image: linear-gradient(
      270deg,
      rgba(102, 77, 182, 0.5) 50%,
      rgba(169, 56, 182, 0.4)
    )
    1;
  box-shadow: 0 4px 16px -6px rgba(0, 0, 0, 0.5);

  display: grid;
  grid-template-areas: 'controls' 'content';
  grid-template-rows: 30px auto;

  margin: 1em;
  padding-bottom: 6px;
`

export const NoteControls = styled.div`
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 0.5);

  grid-area: controls;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  .button {
    cursor: pointer;

    color: rgba(0, 0, 0, 0.2);
    height: 16px;
    stroke-width: 1px;

    transition: 0.3s ease-in-out;

    margin-right: 0.5em;

    :hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`

export const NoteContent = styled.div`
  grid-area: content;

  display: flex;
  justify-content: center;
  align-items: center;

  .filler {
    color: rgba(102, 77, 182, 0.25);
    stroke-width: 4px;
    height: 48px;
    width: 48px;
  }
`
