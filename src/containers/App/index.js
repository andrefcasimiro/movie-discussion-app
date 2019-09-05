// @flow
import React, { Component } from 'react'
import Header from 'components/Header'
import Table from 'components/Table'
import Tile from 'components/Tile'
import { database } from 'global/firebase'
import GlobalStyle from 'global/global-styles'

type S = {
  data: Array<*>,
  loading: boolean,
  key: string,
}

class App<P: *> extends Component <P, S> {
  constructor(props: P) {
    super(props)

    this.state = {
      data: [],
      loading: true,
      key: 'movies',
    }
  }

  componentDidMount() {
    // Create connection
    database.ref().on('value', snapshot => {
      const data = snapshot.val()

      if (data) {
        return this.setState({
          data,
          loading: false,
        })
      }
      return this.setState({
        loading: true,
      })
    })
  }

  render() {
    const { data, loading } = this.state

    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        {loading
          ? <p>Loading...</p>
          : <Table data={data} selector='movies' component={Tile} />
        }
      </React.Fragment>
    )
  }
}

export default App
