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
 * @name SearchTab
 * @desc Navbar Search Tab including Search Form, Searchbox, Form Button
 * @param isSearchPanelShowing : the state of search result panel appearence
 * @param showSearchPanel : show the search result panel
 * @param hideSearchPanel : hide the search result panel
 * @param handleSubmit : Redux-Form's helper
 */
class SearchTab extends React.Component {
  showSearchPanel = () => {
    const {
      isSearchPanelShowing,
      showSearchPanel,
      hideSearchPanel
    } = this.props;

    return isSearchPanelShowing ? hideSearchPanel() : showSearchPanel();
  };

  submitHandler = value => {
    console.table(value);
  };

  render() {
    const { isSearchPanelShowing, handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.submitHandler)}>
        <div style={{ display: "inline-block" }}>
          <Field
            isSearchPanelShowing={isSearchPanelShowing}
            placeholder="ค้นหาทุกอย่างได้จากที่นี่"
            onFocus={this.showSearchPanel}
            component={SearchField}
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
  showSearchPanel: PropTypes.bool.isRequired,
  hideSearchPanel: PropTypes.bool.isRequired,
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
  reduxForm({ form: "navbar_search" }),
  connect(mapStateToProps, mapDispatchToProps)
)(SearchTab);
