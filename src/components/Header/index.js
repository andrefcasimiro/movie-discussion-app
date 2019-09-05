// @flow
import React from 'react'
import appConfiguration from 'global/app'
import { Title } from 'componentsStyled/Typography'
import { Container, Spacer, Blurrer } from './styled'

const Header = () => {

  return (
    <React.Fragment>
          <Blurrer />
      <Container>
        <Title>{appConfiguration.applicationName}</Title>
      </Container>
      <Spacer />
    </React.Fragment>
  )
}

export default Header
