import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { POST_PAGE } from '../constants/endpoints/ui'
import Card from './Card'

const PostListItemCard = Card.extend`
  margin: 0 auto 1.5em auto;
  padding-bottom: 2em;
  padding-right: 2em;
  padding-left: 4em;
  padding-top: 2em;
  text-align: center;
  box-shadow: none;
  cursor: pointer;
  max-width: 90%;
  transition: 150ms ease-in;
  color: #777;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.07);
    color: ${p => p.theme.PRIMARY_COLOR};
  }
`

const PostTitle = styled.h3`
  font-weight: 400;
  font-size: 1.3em;
`

const PostsListWrapper = styled.div`
  height: ${p => p.height || '600px'};
  overflow-y: auto;
  margin-top: 1.5em;
`

/**
 * @name PostListItem
 * @desc Display a single post item with a label
 * @prop { title } : Post title used as a label of each item
 * @prop { _id } : Post ID, used to navigate to a specific post
 */
const PostListItem = ({ title, _id }) => (
  <Link href={{ pathname: POST_PAGE, query: { id: _id } }} prefetch>
    <PostListItemCard>
      <PostTitle>
        {title.length > 55 ? `${title.substr(0, 52)}...` : title}
      </PostTitle>
    </PostListItemCard>
  </Link>
)

/**
 * @name PostsList
 * @desc Display a list of posts associated to a particular classroom
 * @prop { posts } : Array of posts
 * @prop { height } : A height of the list component(CSS Property)
 */
const PostsList = ({ posts, height }) => (
  <PostsListWrapper height={height}>
    {posts.length && posts.length > 0 ? (
      posts.map(post => (
        <PostListItem key={post._id} _id={post._id} title={post.title} />
      ))
    ) : (
      <Card padding="2em 4em" marginTop="3em" textCenter>
        <h3>ยังไม่มีโพสใดๆ</h3>
      </Card>
    )}
  </PostsListWrapper>
)

PostListItem.propTypes = {
  title: PropTypes.string.isRequired
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  height: PropTypes.string
}

export default PostsList
