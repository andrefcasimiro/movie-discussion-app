// @flow
import React from "react"
import withField from 'hocs/withField'
import {
  InputWrap,
  Label,
  Error,
  StyledInput,
} from './styled'

const TextInput = ({ name, label, value, onChange, error }) => (
  <InputWrap>
    <Label>{label}</Label>
    <StyledInput
      name={name}
      onChange={onChange}
      value={value}
    />
    {error && typeof error === 'string' && <Error>{error}</Error>}
  </InputWrap>
)

export default withField(TextInput)
