// @flow
import React from 'react'
import type { Component } from 'recompose'
import Movie from 'components/Movie'
import { RoundSection } from 'componentsStyled/Shared'

type Props = {
  data: any,
  type: 'movies' | '',
}

const getContent = (type: string, data: any): Component => {
  switch (type) {
    case 'movies':
      return <Movie data={data} />
    default:
      return null
  }
}

const Tile = ({ data, type }: Props) => {
  const content = getContent(type, data)

  return (
    <RoundSection>
      {content}
    </RoundSection>
  )
}

export default Tile
