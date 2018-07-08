import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends PureComponent {
  state = {
    author: 'Leonidas'
  }

  render () {

    const {title, cover} = this.props
    const {author} = this.state

    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img src={cover} alt="" width={240} height={160} className="Media-image"/>
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    )
  }

}

Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

Media.defaultProps = {
  title: '-'
}

export default Media