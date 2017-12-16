import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

import { LightButton, PrimaryButton } from "../Button";
import Card, { Header, Body, Footer } from "../Card";
import { Form, Input } from "../Form";

/**
 * @name SearchPanel
 * @desc Allow user to search for something with more advance search tools
 */
class SearchPanel extends React.Component {
  render() {
    return (
      <Card fluidWidth padding="1em" marginBottom="2em">
        <Form>
          <Input type="text" />
          <LightButton
            textCenter
            fluidWidth
            marginTop="1em"
            marginBottom="0"
            marginLeft="auto"
            marginRight="auto"
          >
            ค้นหา
          </LightButton>
        </Form>
      </Card>
    );
  }
}

export default reduxForm({
  form: "advance_search"
})(SearchPanel);
