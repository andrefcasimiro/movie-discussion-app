// @flow
import styled from 'styled-components'
import theme from 'global/theme'
import { BoxSection } from 'componentsStyled/Shared'

export const Container = styled(BoxSection)`
  align-items: center;
  position: fixed;
  width: 100%;
  margin: 0;
  top: 0;
  z-index: ${theme.zIndices.navbar};
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
`

export const Blurrer = styled(Container)`
  backdrop-filter: blur(8px);
  background: none;
`

// Offset to push content below the header
export const Spacer = styled.div`
  height: 6rem;
`
