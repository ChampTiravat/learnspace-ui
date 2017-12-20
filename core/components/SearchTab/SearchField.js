import React from "react";
import PropTypes from "prop-types";

import SearchInput from "./SearchInput";

/**
 *  @name SearchField
 *  @desc Custom redux-form Field component
 *  @prop isSearchPanelShowing : the state of navbar search result panel
 *  @prop placeholder : form's placeholder
 *  @prop type : type of HTML element(text,password, etc)
 *  @prop input : default from redux-form
 *  @prop meta : default from redux-form
 */
const SearchField = ({ isSearchPanelShowing, placeholder, input, type }) => (
  <SearchInput
    isSearchPanelShowing={isSearchPanelShowing}
    placeholder={placeholder}
    {...input}
    type={type}
  />
);

SearchField.prototype = {
  isSearchPanelShowing: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object
};

export default SearchField;
