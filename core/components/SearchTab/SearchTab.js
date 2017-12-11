import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { compose } from "react-apollo";

import SearchResultPanel from "./SearchResultPanel";
import Card, { Body, Footer } from "../Card";
import { ModalBackground } from "../Modal";
import SearchField from "./SearchField";
import { LightButton } from "../Button";
import { Form } from "../Form";
import {
  showSearchPanel,
  hideSearchPanel
} from "../../actions/searchbar-panel-actions";

/**
 *  @name SearchResultPanel
 *  @desc Navbar search result panel to display the search results as a list of items
 *  @param isSearchPanelShowing : the state of navbar search result panel apearence
 *  @param showSearchPanel : show the navbar search panel
 *  @param hideSearchPanel : hide the navbar search panel
 *  @param handleSubmit : Redux-Form's defualt form submition helper
 */
class SearchTab extends React.Component {
  showSearchPanel = () => {
    const {
      isSearchPanelShowing,
      showSearchPanel,
      hideSearchPanel
    } = this.props;
    isSearchPanelShowing ? hideSearchPanel() : showSearchPanel();
  };

  submitHandler = value => console.table(value);

  render() {
    const { isSearchPanelShowing, handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.submitHandler)}>
        <div style={{ display: "inline-block" }}>
          <Field
            isSearchPanelShowing={isSearchPanelShowing}
            onFocus={this.showSearchPanel}
            component={SearchField}
            placeholder="ค้นหาทุกอย่างได้จากที่นี่"
            name="navbar_search"
            type="text"
          />
          <SearchResultPanel show={isSearchPanelShowing} />
        </div>
        <LightButton>ค้นหา</LightButton>
      </Form>
    );
  }
}

SearchTab.propTypes = {
  isSearchPanelShowing: PropTypes.bool.isRequired,
  showSearchPanel: PropTypes.func.isRequired,
  hideSearchPanel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isSearchPanelShowing: state.searchBarPanel
});

const mapDispatchToProps = dispatch => ({
  showSearchPanel: () => dispatch(showSearchPanel()),
  hideSearchPanel: () => dispatch(hideSearchPanel())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "navbar_search" })
)(SearchTab);
