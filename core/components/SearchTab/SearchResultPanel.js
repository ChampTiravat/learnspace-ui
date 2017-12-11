import PropTypes from "prop-types";

import Card from "../Card";

/**
 *  @name SearchResultPanel
 *  @desc Navbar search result panel to display the search results as a list of items
 *  @param show : the state of navbar search result panel apearence
 */
const SearchResultPanel = Card.extend`
  display: ${p => (p.show ? "block" : "none")};
  position: absolute;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 2em;
  height: 300px;
  width: 400px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin: 0 0 0 0.5em;
`;

SearchResultPanel.propTypes = {
  show: PropTypes.bool.isRequired
};

export default SearchResultPanel;
