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
}

const Table = ({ data, selector, component: Component, title }: Props) => {

  return (
    <Margin>
      {title &&
        <TitleSection>
          <Subtitle>{title}</Subtitle>
        </TitleSection>
      }
      <CombinedSection>
        {data[selector].map((entry, index) =>
          <Component data={entry} key={entry.id || index} type={selector} />
        )}
      </CombinedSection>
    </Margin>
  )
}

export default Table
