// @flow
import React from 'react'
import type { Component as TypeComponent } from 'recompose'
import { Margin } from 'componentsStyled/Layout'
import { Subtitle } from 'componentsStyled/Typography'
import { CombinedSection, TitleSection } from 'componentsStyled/Shared'

type Props = {
  data: Array<*>,
  selector: any,
  component: TypeComponent<*, *>,
  title: string,
  transform?: Function,
}

const Table = ({ data, selector, component: Component, title, transform }: Props) => {
  const table = transform
    ? transform(data[selector])
    : data[selector]

  return (
    <Margin>
      {title &&
        <TitleSection>
          <Subtitle>{title}</Subtitle>
        </TitleSection>
      }
      <CombinedSection>
        {table.map((entry, index) =>
          <Component data={entry} key={entry.id || index} type={selector} />
        )}
      </CombinedSection>
    </Margin>
  )
}

export default Table
