// @flow

import React from 'react'
import styled from 'styled-components'

export const FlexDefault = styled.div`
  display: flex;
  height: 100%;
`

export const FlexColumn = FlexDefault.extend`flex-direction: column;`

export const FlexMidLeft = FlexDefault.extend`align-items: center;`

export const FlexCenter = FlexDefault.extend`
  justify-content: center;
  align-items: center;
`

export const FlexEndUp = FlexDefault.extend`
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-end;
`

export const FlexRight = FlexDefault.extend`
  justify-content: flex-end;
  align-items: center;
`

export const Flex = ({
  center,
  column,
  endUp,
  middleLeft,
  right,
  children
}: any) => {
  if (middleLeft) return <FlexMidLeft>{children}</FlexMidLeft>
  if (column) return <FlexColumn>{children}</FlexColumn>
  if (center) return <FlexCenter>{children}</FlexCenter>
  if (endUp) return <FlexEndUp>{children}</FlexEndUp>
  if (right) return <FlexRight>{children}</FlexRight>

  return <FlexDefault>{children}</FlexDefault>
}
