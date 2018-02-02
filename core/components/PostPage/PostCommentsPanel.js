import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card, { Header, Body, Footer } from '../Card'
import PostCommentItem from './PostCommentItem'

const SubCommentsWrapper = styled.ul`
  padding-left: 5em;
  list-style: none;
`

const CommentPanelCard = Card.extend`
  padding-bottom: 4em;
  margin-bottom: 2em;
  max-width: 100%;
  height: 500px;
  width: 900px;
`

/**
 * @name Comment
 * @desc Display user comment with it's sub-comment(s)
 * @prop { creator } [APOLLO] : Comment's creator
 * @prop { content } [APOLLO] : Comment message body
 * @prop { subComments } [APOLLO] : Comment's sub-comments
 */
const Comment = ({ creator, content, subComments }) => (
  <div>
    <PostCommentItem creator={creator} content={content} />
    <SubCommentsWrapper>
      {subComments.length != 0
        ? subComments.map((comment, i) => (
            <PostCommentItem
              isReply
              content={comment.message}
              creator={comment.creator.fname}
            />
          ))
        : null}
    </SubCommentsWrapper>
  </div>
)

Comment.propTypes = {
  creator: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  subComments: PropTypes.array
}

/**
 * @name PostCommentsPanel
 * @desc Display multiple comments of a particular post
 * @prop { comments } [REDUX] : List of comments
 */
const PostCommentsPanel = ({ comments }) => (
  <CommentPanelCard>
    <Header>ความคิดเห็น</Header>
    <Body overflowY="auto" height="450px">
      {!comments || comments.length == 0 ? (
        <Card padding="2em 4em" marginTop="3em" textCenter>
          <h3>ยังไม่มีความคิดเห็นใดๆ</h3>
        </Card>
      ) : (
        comments.map((comment, i) => (
          <Comment
            content={comment.message}
            creator={comment.creator.fname}
            subComments={comment.subComments}
          />
        ))
      )}
    </Body>
  </CommentPanelCard>
)

PostCommentsPanel.propTyps = {
  comments: PropTypes.array.isRequired
}

export default PostCommentsPanel
