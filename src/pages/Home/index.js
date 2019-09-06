// @flow
import React from 'react'
import Movies from 'containers/Movies'
import UserTools from 'containers/UserTools'

const Home = () => {

  return (
    <React.Fragment>
      <UserTools />
      <Movies />
    </React.Fragment>
  )
}

export default Home
