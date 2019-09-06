// @flow
import React from 'react'
import type { Component as TypeComponent } from 'recompose'
import { Margin } from 'componentsStyled/Layout'
import { Subtitle } from 'componentsStyled/Typography'
import { BoxSection, TitleSection } from 'componentsStyled/Shared'
import { Button } from 'componentsStyled/Buttons'
import { ComponentWrapper } from './styled'

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
          <Button><Subtitle>{title}</Subtitle></Button>
        </TitleSection>
      }
      <BoxSection>
        {table.map((entry, index) =>
          <ComponentWrapper>
            <Component data={entry} key={entry.id || index} type={selector} />
          </ComponentWrapper>
        )}
      </BoxSection>
    </Margin>
  )
}

export default Table
