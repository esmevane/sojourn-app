// @flow

import { Accent } from './Accent'
import { Base } from './Base'
import { Content } from './Content'
import { Flex } from './Flex'
import { Footer } from './Footer'
import { Header } from './Header'
import { HeaderCenter } from './HeaderCenter'
import { HeaderSettings } from './HeaderSettings'
import { Main } from './Main'
import { Overlay } from './Overlay'

import createPanes from './Panes'

export default () => {
  const Panes = createPanes()

  return {
    Accent,
    Base,
    Content,
    Flex,
    Footer,
    Header,
    HeaderCenter,
    HeaderSettings,
    Main,
    Panes,
    Overlay
  }
}
