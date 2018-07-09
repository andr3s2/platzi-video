import React from 'react'
import FullScreenIcon from '../../icons/components/fullScreen'
import './full-screen.css'

function FullScreen (props) {

  return (
    <div
      className="FullScreen"
      onClick={props.handleFullScreenClick}
    >
      <FullScreenIcon
        size={25}
      />

    </div>
  )
}

export default FullScreen