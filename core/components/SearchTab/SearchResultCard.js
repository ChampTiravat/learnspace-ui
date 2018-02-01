import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'

import Card, { Footer, Body } from '../Card'

/**
 *  @name SearchResultCardWrapper
 *  @desc A presentational component for Navbar search result panel
 *  @prop show : the state of navbar search result panel apearence
 */
const SearchResultCardWrapper = Card.extend`
  display: ${p => (p.show ? 'block' : 'none')};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  margin: 0 0 0 0.5em;
  padding: 1em 0.5em;
  position: absolute;
  height: 300px;
  width: 400px;
  @media (max-width: 900px) {
    position: fixed;
    width: 100%;
    left: 0em;
    margin: 0;
  }
`

/**
 *  @name MoreSearchResultLink
 *  @desc A button links to full search result(s) page
 */
const MoreSearchResultLink = styled.a`
  color: ${p => p.theme.PRIMARY_COLOR};
  font-size: 1em;
  font-weight: 400;
  cursor: pointer;
`

/**
 *  @name SearchResultCard
 *  @desc Render the search result panel dialog
 *  @param children : Contents of search result items
 *  @param show : the state of navbar search result panel apearence
 */
const SearchResultCard = ({ children, show }) => (
  <SearchResultCardWrapper show={show}>
    <Body height="230px" overflowY="scroll">
      {children}
    </Body>
    <Footer textCenter>
      <Link href="/">
        <MoreSearchResultLink>ดูผลการค้นหาทั้งหมด</MoreSearchResultLink>
      </Link>
    </Footer>
  </SearchResultCardWrapper>
)

SearchResultCard.propTypes = {
  children: PropTypes.array,
  show: PropTypes.bool.isRequired
}

SearchResultCardWrapper.propTypes = {
  show: PropTypes.bool.isRequired
}

export default SearchResultCard
