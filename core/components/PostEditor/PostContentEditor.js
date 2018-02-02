import React from 'react'
import gql from 'graphql-tag'
import Router from 'next/router'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { graphql, compose } from 'react-apollo'

import { renderEditableComponent } from '../../helpers/post'
import BasedComponent from './PostComponents/BasedComponent'
import { POST_PAGE } from '../../constants/endpoints/ui'
import EmptyField from './PostComponents/EmptyField'
import { CircleButton } from '../Button'
import { InputField } from '../Form'
import Card from '../Card'

/**
 * @name PostContentEditor
 * @desc Main playground for building post with the required tools
 * @prop { showComponentsSelectorModal } [REDUX] : f() to select the post component to add to the receipe
 * @prop { showEditPostComponentModal } [REDUX] : f() to show showEditPostComponentModal when user wish to edit an existing component
 * @prop { showPostPreviewModal } [REDUX] : f() to show a post preview modal
 * @prop { removePostComponent } [REDUX] : f() to remove a single post component
 * @prop { showLoadingModal } [REDUX] : Show a loading screen modal while submiting post data to server
 * @prop { hideLoadingModal } [REDUX] : Hide the loading screen modal when post data is submited
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
   * @param { title } [REDUX_FORM] : Post title
   */
  savePost = async ({ title }) => {
    try {
      const {
        mutate,
        receipe,
        classroomID,
        showLoadingModal,
        hideLoadingModal
      } = this.props

      // Show loading modal
      showLoadingModal()

      // Validation
      if (!title || title.length == 0) {
        alert('Title is required')
        hideLoadingModal()
        return
      }

      if (!receipe || receipe.length == 0) {
        alert('Post must have at least one component')
        hideLoadingModal()
        return
      }

      // Convert Array to JSON string
      const recipeJSON = await JSON.stringify(receipe)

      // Sending post data to server
      const result = await mutate({
        variables: {
          title,
          classroomID,
          isPublic: false,
          recipe: recipeJSON
        }
      })

      const { success, post } = result.data.createPost

      if (success) {
        hideLoadingModal()
        Router.push(`${POST_PAGE}?id=${post._id}`)
      } else {
        hideLoadingModal()
        alert('failed')
      }
    } catch (err) {
      // Do something with this
      hideLoadingModal()
    }
    return
  }

  render() {
    const {
      receipe,
      resetPost,
      handleSubmit,
      removePostComponent,
      showPostPreviewModal,
      showEditPostComponentModal,
      showComponentsSelectorModal
    } = this.props

    console.log(receipe)

    return (
      <form onSubmit={handleSubmit(this.savePost)}>
        <Card fluidWidth padding="2em" marginBottom="2em">
          <Field
            required
            type="text"
            name="title"
            label="ชื่อโพส"
            component={InputField}
          />
        </Card>
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
                type="button"
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
                type="button"
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
                type="submit"
                position="fixed"
                padding="1.3em 1em"
              >
                บันทึก
              </CircleButton>
            </div>
          ) : null}
        </div>
      </form>
    )
  }
}

PostContentEditor.propTypes = {
  showComponentsSelectorModal: PropTypes.func.isRequired,
  showEditPostComponentModal: PropTypes.func.isRequired,
  showPostPreviewModal: PropTypes.func.isRequired,
  removePostComponent: PropTypes.func.isRequired,
  showLoadingModal: PropTypes.func.isRequired,
  hideLoadingModal: PropTypes.func.isRequired,
  classroomID: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
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

export default compose(
  reduxForm({ form: 'create_post' }),
  graphql(CREATE_POST_MUTATION)
)(PostContentEditor)
