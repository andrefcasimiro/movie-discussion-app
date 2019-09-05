// @flow
import React, { Component } from 'react'
import Header from 'components/Header'
import Table from 'components/Table'
import firebaseConfig from 'global/firebase'
import GlobalStyle from 'global/global-styles'

type S = {
  data: ?Object,
}

class App<P: *> extends Component <P, S> {
  constructor(props: P) {
    super(props)

    this.state = {
      data: null,
    }
  }

  render() {

    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <Table />
      </React.Fragment>
    )
  }
}

export default App
