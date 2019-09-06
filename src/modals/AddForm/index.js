// @flow
import React from 'react'
import Modal from '../_Modal'

type Props = {
  close: Function,
  title: string,
}

/**
 * A generic form wrapped in a modal
 * @param {string} title - Title of the form that will be rendered in the modal header
 * @param {Function} close - comes from the high-order component withOpen, and is used to close the modal
 */
const AddForm = ({ title, close }: Props) => {

  return (
    <Modal title={title} close={close}>
      <h2>Hello</h2>
    </Modal>
  )
}
