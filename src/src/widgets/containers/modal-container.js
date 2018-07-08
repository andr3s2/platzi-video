import React from 'react'
import ReactDom from 'react-dom'

class ModalContainer extends React.Component {

  render () {
    return ReactDom.createPortal(
      this.props.children,
      document.getElementById('modal-container')
    )
  }

}

export default ModalContainer