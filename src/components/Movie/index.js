// @flow
import React from 'react'
import type { Movie as TypeMovie } from 'data/movie/types'

type Props = {
  data: TypeMovie,
}

const Movie = ({ data }: Props) => {

  return (
    <React.Fragment>
      <h3>{data.title}</h3>
    </React.Fragment>
  )
}

export default Movie
