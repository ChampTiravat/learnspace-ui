import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import styled from "styled-components";

/**
 * @name Form
 * @desc Form elements container
 */
export const Form = styled.form`
  display: inline;
  padding: 0;
  margin: 0;
`;

/**
 *  @name Input
 *  @desc Form Input
 *  @param : defalt HTML attr(s)
 *  @param inline : display the input as an inlined element
 */
export const Input = styled.input`
  display: ${p => (p.inline ? "inline-block" : "block")};
  width: ${p => (p.inline ? "auto" : "100%")};
  border: none;
  border-radius: ${p => p.theme.BORDER_RADIUS};
  padding: 0.6em;
  margin: 0 auto;
  font-size: 1em;
  font-family: "Arial";
  font-weight: 300;
  color: ${p => p.theme.TEXT_COLOR};
  background-color: ${p => p.theme.TEXT_INPUT_BACKGROUND_COLOR};
`;

/**
 *  @name TextArea
 *  @desc Form Input
 *  @param : defalt HTML attr(s)
 *  @param inline : display the input as an inlined element
 */
export const TextArea = styled.textarea`
  display: ${p => (p.inline ? "inline-block" : "block")};
  width: ${p => (p.inline ? "auto" : "100%")};
  border: none;
  border-radius: ${p => p.theme.BORDER_RADIUS};
  padding: 0.6em;
  margin: 0 auto;
  font-size: 1em;
  font-family: "Arial";
  font-weight: 300;
  color: ${p => p.theme.TEXT_COLOR};
  background-color: ${p => p.theme.TEXT_INPUT_BACKGROUND_COLOR};
`;

/**
 * @name InputLabel
 * @desc Input label, used to display the users what information they have to provide
 */
export const InputLabel = styled.label`
  font-family: "Kanit";
  font-size: 1em;
  font-weight: 400;
  color: ${p => p.theme.PRIMARY_COLOR};
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

export const TextAreaField = ({
  input,
  type,
  label,
  meta: { touched, error }
}) => (
  <InputGroup>
    <InputLabel>{label}</InputLabel>
    <TextArea {...input} />
    {touched && error && <span className="error">{error}</span>}
  </InputGroup>
);
