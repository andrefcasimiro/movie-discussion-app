// @flow
import React from 'react'
import appConfiguration from 'global/app'
import { Title } from 'componentsStyled/Typography'
import { GlassWrapper } from 'componentsStyled/Shared'
import { Container, Spacer, Blurrer } from './styled'

const Header = () => {

  return (
    <React.Fragment>
      <Blurrer />
      <Container>
        <GlassWrapper onClick={() => window.location.assign('/')}>
          <Title>{appConfiguration.applicationName}</Title>
        </GlassWrapper>
      </Container>
      <Spacer />
    </React.Fragment>
  )
}

export default Header
