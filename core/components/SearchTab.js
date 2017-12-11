import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import Card, { Body, Footer } from "./Card";
import { ModalBackground } from "./Modal";
import { LightButton } from "./Button";
import { Form } from "./Form";
import {
  showSearchPanel,
  hideSearchPanel
} from "../actions/searchbar-panel-actions";

const SearchBar = styled.input`
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

class SearchTab extends React.Component {
  showSearchPanel = () => {
    // const {
    //   showSearchPanel,
    //   hideSearchPanel,
    //   isSearchPanelShowing
    // } = this.props;
    // isSearchPanelShowing ? hideSearchPanel() : showSearchPanel();
  };

  render() {
    // const { isSearchPanelShowing } = this.props;
    console.log(this.props.test);
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          alert("Searching");
        }}
      >
        <div style={{ display: "inline-block" }}>
          <SearchBar
            // onFocus={this.showSearchPanel}
            type="text"
            name="navbar_search"
            placeholder="ค้นหาทุกอย่างได้จากที่นี่"
            // isSearchPanelShowing={isSearchPanelShowing}
          />
          <SearchResultPanel show={isSearchPanelShowing} />
        </div>
        <LightButton>ค้นหา</LightButton>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  //   isSearchPanelShowing: state.searchBarPanel
  test: state.test
});

const mapDispatchToProps = dispatch => ({
  showSearchPanel: dispatch(showSearchPanel()),
  hideSearchPanel: dispatch(hideSearchPanel())
});

export default connect({
  mapStateToProps,
  mapDispatchToProps
})(SearchTab);
