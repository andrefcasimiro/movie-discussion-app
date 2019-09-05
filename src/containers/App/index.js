// @flow
import React, { Component } from 'react'
import Header from 'components/Header'
import Table from 'components/Table'
import firebaseConfig from 'global/firebase'

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
        <Header />
        <Table />
      </React.Fragment>
    )
  }
}

export default App
