// @flow
import styled from 'styled-components'
import theme from 'global/theme'
import { Row } from '../Layout'

export const BoxSection = styled(Row)`
  /* Colors */
  background: rgba(255, 255, 255, 0.1);
  color: ${theme.colors.themes.common.white};
  /* Dimensions */
  min-height: 6rem;

  /* Spacing */
  padding: 1rem;

  /* Flex Aligns */
  align-items: flex-start;
  justify-content: flex-start;

  /* Transforms & FX */
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.4);
`

export const RoundSection = styled(Row)`
  /* Colors */
  background: rgba(255, 255, 255, 0.1);
  color: ${theme.colors.themes.common.white};
  /* Dimensions */
  min-height: 8rem;

  /* Spacing */
  padding: 1rem;
  margin: 1rem;

  /* Flex Aligns */
  align-items: flex-start;
  justify-content: flex-start;

  /* Border Effects */
  border-radius: 0.5rem;

  /* Transforms & FX */
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.4);
`
