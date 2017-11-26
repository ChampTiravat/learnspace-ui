import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import styled from "styled-components";

/**
 *  @name Input
 *  @desc Form Input
 *  @param : defalt HTML attr(s)
 */
export const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-radius: ${p => p.theme.borderRadius};
  padding: 0.6em;
  margin: 0.5em auto;
  font-size: 1em;
  font-family: "Arial";
  font-weight: 300;
  font-color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.textInputBackgroundColor};
`;

/**
 * @name InputLabel
 * @desc Input label, used to display the users what information they have to provide
 */
export const InputLabel = styled.label`
  font-family: "Kanit";
  font-size: 1em;
  font-weight: 400;
  color: ${p => p.theme.primaryColor};
`;

/**
 * @name InputGroup
 * @desc Wrapp Input elements and it's label(<InputLabel />) component
 */
export const InputGroup = styled.div`
  margin: 0.5em auto;
`;

/**
 *  @name InputField
 *  @desc Custom redux-form Field component
 *  @param input : default from redux-form
 *  @param type : type of HTML element(text,password, etc)
 *  @param label : text to display on <InputLabel />
 *  @param meta : default from redux-form
 */
export const InputField = ({
  input,
  type,
  label,
  meta: { touched, error }
}) => (
  <InputGroup>
    <InputLabel>{label}</InputLabel>
    <Input {...input} type={type} />
    {touched && error && <span className="error">{error}</span>}
  </InputGroup>
);

InputField.prototype = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
