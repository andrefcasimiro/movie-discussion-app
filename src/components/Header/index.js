// @flow
import React from 'react'
import appConfiguration from 'global/app'
import { Container } from './styled'

const Header = () => {

  return (
    <Container>
      {appConfiguration.applicationName}
    </Container>
  )
}

export default Header
