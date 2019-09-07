// @flow
import React from 'react'
import * as yup from 'yup'
import { compose, type HOC, withProps } from 'recompose'
import withForm from 'hocs/withForm'
import TextInput from 'components/Inputs/TextInput'
import { Submit } from 'componentsStyled/Buttons'
import type { Form } from 'data/forms/types'

type Props = {
  close: Function,
  title: string,
  form: Form[],
}

const AddForm = ({ form, title }) => {
  return (
    <React.Fragment>
      {form.map((field, index) =>
        <TextInput key={index} name={field.name} label={field.label} type={field.type} />
      )}

      <Submit type='submit'>Add new movie</Submit>
    </React.Fragment>
  )
}

const schema = {
}

const enhancer: HOC<*, Props> = compose(
  withProps(props => {
    if (!props.form) { return }

    // Build dynamic schema
    const customSchema = props.form.reduce((acc, field) => {
      // Is text or text separated by commas
      if (field.dataType === 'string' || field.dataType === 'array') {
        const base = yup.string().min(3)
        const validator = field.required ? base.required() : base.nullable()

        return acc.concat({
          [field.name]: validator,
        })
      }

      // Is number
      const base = yup.number().positive()
      const validator = field.required ? base.required() : base.nullable()

      return acc.concat({
        [field.name]: validator,
      })
    }, [])

    return {
      customSchema,
    }
  }),
  withForm({
    schema,
    onSubmit: props => values => {

      console.log('values: ', values)

      return Promise.resolve()
    },
    //onSuccess: props => props.close(),
  }),
)

export default enhancer(AddForm)
