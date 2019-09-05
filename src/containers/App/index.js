// @flow
import React, { Component } from 'react'
import Header from 'components/Header'
import Table from 'components/Table'
import Movie from 'components/Movie'
import { Margin } from 'componentsStyled/Layout'
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
          : <Margin>
              <Table data={data} selector='movies' component={Movie} title='Awarded Movies' />
              <Table data={data} selector='movies' component={Movie} title='Adventure Movies' />
            </Margin>
        }
      </React.Fragment>
    )
  }
}

export default App
