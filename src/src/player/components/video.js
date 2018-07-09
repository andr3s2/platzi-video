import React from 'react'
import './video.css'

class Video extends React.Component {

  componentWillReceiveProps (nextProps) {
    if (nextProps.pause !== this.props.pause) {
      this.togglePlay()
    }
  }

  togglePlay () {

    if (this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  setRef = element => {
    this.video = element
  }

  render () {
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked
    } = this.props

    return (
      <div className="Video">
        <video
          src={this.props.src}
          autoPlay={this.props.autoplay}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
        />
      </div>
    )
  }

}

export default Video