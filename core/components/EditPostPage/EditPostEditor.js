import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { initializePost } from '../../reducers/editing-post-receipe'
import PostEditor from '../PostEditor/PostEditor'

class EditPostEditor extends React.Component {
  componentDidMount() {
    this.props.initializePostReceipe()
  }
  render() {
    return <PostEditor />
  }
}

EditPostEditor.propTypes = {
  initializePostReceipe: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  initializePostReceipe: () => dispatch(initializePost())
})

export default connect(null, mapDispatchToProps)(EditPostEditor)
