import React from 'react'
import HomeLayout from '../components/home-layout'
import Related from '../components/related'
import Categories from '../../categories/components/categories'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends React.Component {

  state = {
    modalVisible: false,
    handleError: false
  }

  handleOpenModal = (event) => {
    this.setState({
      modalVisible: true
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    })
  }

  render () {

    return (
      <HandleError>
        <HomeLayout>
          <Related/>
          <VideoPlayer
            autoplay={false}
          />
          <Categories handleOpenModal={this.handleOpenModal} categories={this.props.data.categories}/>
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleCloseModal={this.handleCloseModal}
              >
              </Modal>
            </ModalContainer>
          }

        </HomeLayout>
      </HandleError>
    )
  }

  componentDidCatch (error, info) {
    this.setState({
      handleError: true
    })
  }
}

export default Home