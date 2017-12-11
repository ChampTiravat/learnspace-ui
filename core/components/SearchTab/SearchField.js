import React from "react";
import PropTypes from "prop-types";

import SearchInput from "./SearchInput";

/**
 *  @name SearchField
 *  @desc Custom redux-form Field component
 *  @param isSearchPanelShowing : search panel status to determine showing the border-radius of the input
 *  @param placeholder : HTML placeholder
 *  @param type  : type of HTML element(text,password, etc)
 *  @param input : default from redux-form
 *  @param meta  : default from redux-form
 */
const SearchField = ({
  isSearchPanelShowing,
  placeholder,
  type,
  input,
  meta: { touched, error }
}) => (
  <SearchInput
    isSearchPanelShowing={isSearchPanelShowing}
    placeholder={placeholder}
    type={type}
    {...input}
  />
);

SearchField.propTypes = {
  isSearchPanelShowing: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired
};

export default SearchField;
