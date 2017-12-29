import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * @name DefaultButton
 * @desc General purposes button with basic styling
 * @param fluidWidth : Expand the width to match the parent component
 * @param fluidHeight : Expand the height to match the parent component
 * @param textCenter : Center the text (use this by default)
 * @param textRight : Align the text to the right
 * @param textLeft : Align the text to the left
 * @param rounded : 50% radius so the button would looks like a circle
 */
export const DefaultButton = styled.button`
  width: ${p => (p.fluidWidth ? "100%" : "auto")};
  height: ${p => (p.fluidHeight ? "100%" : "auto")};
  padding: ${p => (p.rounded ? "0.5em 1em" : "0.4em 1em")};
  margin: ${p => p.margin || "0"};
  margin-top: ${p => p.marginTop || "0"};
  margin-bottom: ${p => p.marginBottom || "0"};
  margin-left: ${p => p.marginLeft || "0"};
  margin-right: ${p => p.marginRight || "0"};
  border: none;
  color: #777;
  cursor: pointer;
  font-size: 1em;
  font-weight: 300;
  text-align: ${p =>
    p.textCenter ? "center" : p.textRight ? "right" : "left"};
  border-radius: ${p => (p.rounded ? "50%" : p.theme.BORDER_RADIUS)};
`;

/**
 * @name LightButton
 * @desc Alternative to PrimaryButton when placing on the dark background
 */
export const LightButton = DefaultButton.extend`
  color: ${p => p.theme.PRIMARY_COLOR};
  background-color: #fff;
`;

/**
 * @name PrimaryButton
 * @desc Primary style (for general purposes)
 */
export const PrimaryButton = DefaultButton.extend`
  background-color: ${p => p.theme.PRIMARY_COLOR};
  color: #fff;
`;

/**
 * @name InfoButton
 * @desc For more information or trigger expanable component
 */
export const InfoButton = DefaultButton.extend`
  color: #fff;
  background-color: ${p => p.theme.INFO_COLOR};
`;

/**
 * @name SuccessButton
 * @desc For comfirming or finishing a process
 */
export const SuccessButton = DefaultButton.extend`
  color: #fff;
  background-color: ${p => p.theme.SUCCESS_COLOR};
`;

/**
 * @name WarningButton
 * @desc For a danger operation such as remove someone from the group, etc
 */
export const WarningButton = DefaultButton.extend`
  color: #fff;
  background-color: ${p => p.theme.WARNING_COLOR};
`;

/**
 * @name DangerButton
 * @desc For very danger operation such as blocking someone, deactivate account or delete a post, etc
 */
export const DangerButton = DefaultButton.extend`
  color: #fff;
  background-color: ${p => p.theme.DANGER_COLOR};
`;

DefaultButton.propTypes = {
  fluidWidth: PropTypes.bool,
  fluidHeight: PropTypes.bool,
  default: PropTypes.bool,
  primary: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  textCenter: PropTypes.bool,
  textRight: PropTypes.bool,
  textLeft: PropTypes.bool
};
