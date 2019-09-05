// @flow
import styled from 'styled-components'
import { RoundSection } from 'componentsStyled/Shared'
import {
  Column,
} from 'componentsStyled/Layout'

export const Wrapper = styled(RoundSection)`
  width: 16rem;
  height: 22rem;

  justify-content: center;
  align-items: center;

  background: linear-gradient(to top, rgba(109,0,0, 0) 0%,
              rgba(0,0,0, .7)), url(${p => p.background});
  background-repeat: no-repeat;
  background-size: 180%;
  background-position: 50% 0%;

  text-align: center;
  cursor: pointer;
  opacity: 0.3;
  transition: 0.3s all;

  &:hover {
    transition: 0.3s all;
    background-position: 50% 5%;
    opacity: 1;
  }
`

export const Content = styled(Column)`
  align-items: center;
`
