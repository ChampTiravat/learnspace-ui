import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SLIDE_SHOW } from '../../../../constants/post-content/components'
import { CircleButton, Button } from '../../../Button'
import { Header, Body, Footer } from '../../../Card'
import { Form, Input } from '../../../Form'

const ImageUpLoadWrapper = styled.div`
  height: 250px;
  width: 100%;
  margin-bottom: 1em;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`

/**
 * @name Slideshow
 * @desc Display a slide of images, used to present a visual communication about a certain topic or used to catch reader's attention
 * @prop { hideAddPostComponentModal } [REDUX] : f() to close the AddPostComponentModal(close the modal intentionally)
 * @prop { useToAddComponent } [REDUX] : Specify wether to use this modal to add new component or edit the one existed
 * @prop { addNewPostComponent } [REDUX] : f() to append a new post component to receipe
 * @prop { editPostComponent } [REDUX] : f() to edit an existing post component in the receipe
 * @prop { order } [REDUX] : The component's current order in receipe
 * @prop { type } [REDUX] : Type of the component to be inserted
 */
class Slideshow extends React.Component {
  state = {
    imageToAddURL: '',
    imageToAddALT: '',
    images: []
  }
  /**
   * @name addComponentHandler()
   * @desc Append the <Slideshow /> component to the 'receipe'
   */
  addComponentHandler = () => {
    const { images } = this.state

    const { hideAddPostComponentModal, addNewPostComponent, order } = this.props

    if (!images.length || images.length == 0 || images.length < 2) return null

    addNewPostComponent({
      type: SLIDE_SHOW,
      data: images,
      order
    })

    hideAddPostComponentModal()
  }

  /**
   * @name editComponentHandler()
   * @desc Edit the specific <Slideshow /> component in the 'receipe'
   */
  editComponentHandler = () => {
    const { hideEditPostComponentModal, editPostComponent, order } = this.props
    const { images } = this.state

    if (!images.length || images.length == 0 || images.length < 2) return null

    editPostComponent({
      newData: images,
      type: SLIDE_SHOW,
      order
    })

    hideEditPostComponentModal()
  }

  /**
   * @name removeImage
   * @desc Remove image specifying with it's ID
   * @param imageToRemove : An image to remove
   */
  removeImage = imageToRemove => {
    this.setState(({ images }) => ({
      images: images.filter(image => image.id !== imageToRemove.id)
    }))
  }

  /**
   * @name renderImages
   * @desc Render every images which have been added to the slide
   */
  renderImages = () =>
    this.state.images.map(image => (
      <ImageUpLoadWrapper key={image.id}>
        <CircleButton
          danger
          type="button"
          position="absolute"
          top="1em"
          right="1em"
          onClick={() => this.removeImage(image)}
        >
          -
        </CircleButton>
        <Button light type="button">
          เลือกรูปภาพ
        </Button>
      </ImageUpLoadWrapper>
    ))

  /**
   * @name addImage
   * @desc Add a new image to the slide
   */
  addImage = () => {
    const { imageToAddURL, imageToAddALT } = this.state

    if (imageToAddURL == '') {
      return null
    }

    this.setState(({ images, imageToAddURL, imageToAddALT }) => ({
      images: images.concat({
        id: Math.ceil((Math.random() + (1 + Math.random())) * 100),
        url: imageToAddURL,
        alt: imageToAddALT || imageToAddURL
      })
    }))

    this.setState({
      imageToAddURL: '',
      imageToAddALT: ''
    })
  }

  render() {
    const {
      hideAddPostComponentModal,
      hideEditPostComponentModal,
      useToAddComponent
    } = this.props

    /*
      Specify which f() will be used to hide this modal
      depending on wether this modal have been called as
      a modal to add new component or editing the new one
    */
    const hideThisModal = useToAddComponent
      ? hideAddPostComponentModal
      : hideEditPostComponentModal

    /*
      Specify which f() will be used to submit the form 
      depending on wether this modal have been called as
      a modal to add new component or editing the new one
    */
    const submitHandler = useToAddComponent
      ? this.addComponentHandler
      : this.editComponentHandler

    return [
      <Header>สไลด์รูปภาพ</Header>,
      <Form onSubmit={e => e.preventDefault() & submitHandler()}>
        <Body>
          {this.renderImages()}
          <div>
            <Input
              name="imageToAddURL"
              type="text"
              value={this.state.imageToAddURL}
              onChange={e => this.setState({ imageToAddURL: e.target.value })}
            />
            <Input
              name="imageToAddALT"
              type="text"
              value={this.state.imageToAddALT}
              onChange={e => this.setState({ imageToAddALT: e.target.value })}
            />
            <Button
              primary
              fluidWidth
              textCenter
              type="button"
              marginTop="1em"
              onClick={this.addImage}
            >
              เพิ่มรูปภาพ
            </Button>
          </div>
        </Body>
        <Footer>
          <Button primary marginRight="0.5em">
            เสร็จสิ้น
          </Button>
          <Button light type="button" onClick={hideThisModal}>
            ยกเลิก
          </Button>
        </Footer>
      </Form>
    ]
  }
}

Slideshow.propTypes = {
  useToAddComponent: PropTypes.bool.isRequired,
  hideAddPostComponentModal: PropTypes.func,
  addNewPostComponent: PropTypes.func,
  editPostComponent: PropTypes.func,
  order: PropTypes.number.isRequired
}

export default Slideshow
