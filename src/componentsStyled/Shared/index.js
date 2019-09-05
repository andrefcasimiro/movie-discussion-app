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
  flex-wrap: wrap;

  /* Border Effects */
  border-radius: 0.5rem;

  /* Transforms & FX */
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.4);
`

// Use TitleSection and CombinedSection to produce a full bordered radius box
export const TitleSection = styled(BoxSection)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  height: 5rem;
  min-height: auto;
  background: ${theme.colors.themes.cakebear.orange};
  color: ${theme.colors.themes.common.white};
  box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);
`

export const CombinedSection = styled(RoundSection)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 0;
`

export const Image = styled.img`
  display: flex;
  flex-grow: 1;
  width: 75%;
  margin: 1rem;
  border-radius: 0.1rem;
`
