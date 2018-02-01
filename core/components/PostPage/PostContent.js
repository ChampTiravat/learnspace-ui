import React from 'react'
import PropTypes from 'prop-types'

import { renderPostComponent } from '../../helpers/post'
import PostContentWrapper from './PostContentWrapper'

/**
 * @name PostContent
 * @desc Display post content
 * @prop { recipe } [APOLLO] : Post recipe
 */
const PostContent = ({ recipe }) => (
  <PostContentWrapper>
    {renderPostComponent(JSON.parse(recipe))}
  </PostContentWrapper>
)

PostContent.propTypes = {
  recipe: PropTypes.string.isRequired
}

export default PostContent
