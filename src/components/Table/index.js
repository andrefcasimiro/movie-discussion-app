// @flow
import React from 'react'
import type { Component as TypeComponent } from 'recompose'
import { RoundSection } from 'componentsStyled/Shared'

type Props = {
  data: Array<*>,
  selector: any,
  component: TypeComponent<*, *>,
}

const Table = ({ data, selector, component: Component }: Props) => {

  return (
    <RoundSection>
      {data[selector].map((entry, index) =>
        <Component data={entry} key={entry.id || index} type={selector} />
      )}
    </RoundSection>
  )
}

export default Table
