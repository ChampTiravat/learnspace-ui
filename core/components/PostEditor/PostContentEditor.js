import React from 'react'
import Router from 'next/router'
import PropTypes from 'prop-types'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { renderEditableComponent } from '../../helpers/post'
import SetTitleCard from './PostComponents/SetPostTitleCard'
import BasedComponent from './PostComponents/BasedComponent'
import { POST_PAGE } from '../../constants/endpoints/ui'
import EmptyField from './PostComponents/EmptyField'
import { CircleButton } from '../Button'
import Card from '../Card'

/**
 * @name PostContentEditor
 * @desc Main playground for building post with the required tools
 * @prop { showComponentsSelectorModal } [REDUX] : f() to select the post component to add to the receipe
 * @prop { showEditPostComponentModal } [REDUX] : f() to show showEditPostComponentModal when user wish to edit an existing component
 * @prop { showPostPreviewModal } [REDUX] : f() to show a post preview modal
 * @prop { removePostComponent } [REDUX] : f() to remove a single post component
 * @prop { classroomID } [REDUX] : Classroom ID
 * @prop { resetPost } [REDUX] : f() to remove every components in the current post editor
 * @prop { receipe } [REDUX] : Array of post components
 */
class PostContentEditor extends React.Component {
  shouldComponentUpdate(nextProp) {
    return this.props !== nextProp
  }

  /**
   * @name savePost()
   * @desc Save the editing post to API
   */
  savePost = async () => {
    try {
      const { mutate, receipe, classroomID } = this.props
      const recipeJSON = JSON.stringify(receipe)

      const result = await mutate({
        variables: {
          title: 'testing',
          recipe: recipeJSON,
          isPublic: false,
          classroomID
        }
      })

      const { success, post } = result.data.createPost

      if (success) {
        Router.push(`${POST_PAGE}?id=${post._id}`)
      } else {
        alert('failed')
      }
    } catch (err) {
      // Do something with this
    }
  }

  render() {
    const {
      receipe,
      resetPost,
      removePostComponent,
      showPostPreviewModal,
      showEditPostComponentModal,
      showComponentsSelectorModal
    } = this.props
    console.log(receipe) // DEBUGING
    return (
      <div>
        <SetTitleCard />
        <Card fluidWidth noShadow padding="2em" marginBottom="4em">
          {renderEditableComponent(
            receipe,
            removePostComponent,
            showEditPostComponentModal
          )}
          <EmptyField onClick={showComponentsSelectorModal} />
        </Card>
        <div>
          {receipe.length > 0 ? (
            <div>
              <CircleButton
                light
                right="3em"
                bottom="15em"
                position="fixed"
                padding="1.3em 1em"
                onClick={resetPost}
              >
                รีเซ็ต
              </CircleButton>
              <CircleButton
                light
                padding="1.3em 1em"
                position="fixed"
                bottom="9em"
                right="3em"
                onClick={showPostPreviewModal}
              >
                พรีวิว
              </CircleButton>
              <CircleButton
                primary
                right="3em"
                bottom="3em"
                position="fixed"
                padding="1.3em 1em"
                onClick={() => this.savePost()}
              >
                บันทึก
              </CircleButton>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

PostContentEditor.propTypes = {
  showComponentsSelectorModal: PropTypes.func.isRequired,
  showEditPostComponentModal: PropTypes.func.isRequired,
  showPostPreviewModal: PropTypes.func.isRequired,
  removePostComponent: PropTypes.func.isRequired,
  classroomID: PropTypes.string.isRequired,
  resetPost: PropTypes.func.isRequired,
  receipe: PropTypes.array.isRequired
}

const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $title: String!
    $recipe: String!
    $isPublic: Boolean!
    $classroomID: String!
  ) {
    createPost(
      title: $title
      recipe: $recipe
      isPublic: $isPublic
      classroomID: $classroomID
    ) {
      success
      post {
        _id
      }
      err {
        message
      }
    }
  }
`

export default graphql(CREATE_POST_MUTATION)(PostContentEditor)
