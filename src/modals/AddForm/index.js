// @flow
import React from 'react'
import type { HOC } from 'recompose'
import withForm from 'hocs/withForm'
import TextInput from 'components/Inputs/TextInput'
import type { Form } from 'data/forms/types'

type Props = {
  close: Function,
  title: string,
  form: Form[],
}

const AddForm = ({ form }) => {
  return (
    <React.Fragment>
      {form.map((field, index) =>
        <TextInput key={index} name={field.name} label={field.label} type={field.type} />
      )}
    </React.Fragment>
  )
}

const schema = {
}

const enhancer: HOC<*, Props> = withForm({
  schema,
  onSubmit: props => values => {

    console.log('values: ', values)

    return Promise.resolve()
  },
  //onSuccess: props => props.close(),
})

export default enhancer(AddForm)
