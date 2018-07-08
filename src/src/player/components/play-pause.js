import React from 'react'
import PlayIcon from '../../icons/components/play'
import PauseIcon from '../../icons/components/pause'
import './play-pause.css'

function PlayPause (props) {
  return (
    <div className="PlayPause">
      {
        props.pause ?
          <button
            onClick={props.handleClick}
          >
            <PlayIcon/>
          </button>
          :
          <button
            onClick={props.handleClick}
          >
            <PauseIcon/>
          </button>
      }

    </div>
  )
}

export default PlayPause