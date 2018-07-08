import React from 'react'
import Media from './media'
import './playlist.css'
import IconPlay from '../../icons/components/play'
import IconFullScreen from '../../icons/components/fullScreen'
import IconPause from '../../icons/components/pause'
import IconVolume from '../../icons/components/volume'

function PlayList (props) {

  return (
    <div className="Playlist">
      {
        props.playlist.map(item => {
          return <Media
            {...item}
            key={item.id}
          />
        })
      }
    </div>
  )

}

export default PlayList