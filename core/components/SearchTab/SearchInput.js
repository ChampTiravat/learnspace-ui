import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * @name SearchInput
 * @desc Navbar Search Input
 * @prop isSearchPanelShowing : current state of navbar search result panel
 */
const SearchInput = styled.input`
  display: inline;
  width: 400px;
  height: auto;
  border: none;
  border-radius: 5px;
  padding: 0.4em 1em;
  margin: 0 0.5em 0 0.5em;
  font-size: 1em;
  font-weight: 300;
  color: ${p => p.theme.textColor};
  background-color: #fff;
  border-bottom-left-radius: ${p => (p.isSearchPanelShowing ? "0" : "5px")};
  border-bottom-right-radius: ${p => (p.isSearchPanelShowing ? "0" : "5px")};
`;

SearchInput.propTypes = {
  isSearchPanelShowing: PropTypes.bool.isRequired
};

export default SearchInput;
