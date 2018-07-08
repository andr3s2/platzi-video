import React from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import Timer from '../components/timer'
import PlayPause from '../components/play-pause'
import VideoControl from '../components/video-player-controls'

class VideoPlayer extends React.Component {

  state = {
    pause: true,
    duration: 0,
    currentTime: 0
  }

  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount () {
    this.setState({
      pause: this.props.autoplay
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    this.video = event.target
    this.setState({
      currentTime: this.video.currentTime
    })
  }

  render () {
    return (
      <VideoPlayerLayout>
        <Title title='Hola!!'/>
        <VideoControl>
          <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
          <Timer duration={this.state.duration} currentTime={this.state.currentTime}/>
        </VideoControl>
        <Video
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          autoplay={this.props.autoplay}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer