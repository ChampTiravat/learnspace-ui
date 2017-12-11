import React from "react";
import PropTypes from "prop-types";

import SearchInput from "./SearchInput";

/**
 *  @name SearchField
 *  @desc Custom redux-form Field component
 *  @param isSearchPanelShowing : the state of navbar search result panel
 *  @param placeholder : form's placeholder
 *  @param type : type of HTML element(text,password, etc)
 *  @param input : default from redux-form
 *  @param meta : default from redux-form
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
