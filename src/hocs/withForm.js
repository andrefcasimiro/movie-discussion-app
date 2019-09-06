// @flow
import React from 'react'
import styled from 'styled-components'
import type { HOC } from 'recompose'
import { pick } from 'ramda'
import * as yup from 'yup'
import { withFormik } from 'formik'

type Validator<T> = Object
type ExtractValidatorType = <T>(validator: Validator<T>) => T

type Configuration<Props, Response, Schema> = {
  schema: Schema,
  onSubmit: ({ ...$Exact<Props>, ...$Exact<Added<Schema>> }) => (
    $ObjMap<Schema, ExtractValidatorType>,
  ) => Promise<Response>,
  onSuccess?: ({ ...$Exact<Props>, ...$Exact<Added<Schema>> }) => Response => mixed,
  onError?: ({ ...$Exact<Props>, ...$Exact<Added<Schema>> }) => string => mixed,
}

type Added<Schema> = {
  submitted: boolean,
  isSubmitting: boolean,
  error?: string,
  resetForm: Function,
  values: $ObjMap<Schema, ExtractValidatorType>,
}

const Form = styled.form`
  width: 100%;
`

function withForm<Outter, Response, Schema: {}>(
  configuration: Configuration<Outter, Response, Schema>,
): HOC<{ ...$Exact<Outter>, ...$Exact<Added<Schema>> }, Outter> {
  const { schema, onSubmit, onSuccess, onError } = configuration

  return ComposedComponent =>
    withFormik({
      mapPropsToValues: props => {
        if (props.formData) {
          return pick(
            Object.keys(schema)
          )(props.formData)
        }

        return {}
      },
      validationSchema: yup.object().shape(schema),
      handleSubmit: (values, other) => {
        other.setStatus({ ...other.status, error: null })

        return onSubmit(other.props)(values)
          .then(result => {
            other.setStatus({
              ...other.status,
              submitted: true,
            })

            other.setSubmitting(false)

            if (onSuccess) {
              onSuccess({
                ...other,
                ...other.props,
                values
              })(result)
            }
          })
          .catch(error => {
            other.setStatus({
              ...other.status,
              error,
            })

            other.setSubmitting(false)

            if (onError) {
              onError({
                ...other,
                ...other.props,
              })(error)
            }
          })
      },
    })(props => (
      <Form onSubmit={event => {
        props.setStatus({
          ...props.status,
          submitted: true,
        })

        return props.handleSubmit(event)
      }}>
        <ComposedComponent {...props}
          error={props.error}
          submitted={props.submitted}
        />
      </Form>
    ))
}

export default withForm
