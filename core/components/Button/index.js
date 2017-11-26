import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * @name Button
 * @desc General purposes button with multiple style options
 * @param fluidWidth : Expand the width to match the parent component
 * @param fluidHeight : Expand the height to match the parent component
 * @param default : Default style
 * @param primary : Default style (for general purposes)
 * @param info : For more information or trigger expanable component
 * @param success : For comfirming or finishing a process
 * @param warning : For a danger operation such as remove someone from the group, etc
 * @param danger : For very danger operation such as blocking someone, deactivate account or delete a post, etc
 * @param textCenter : Center the text (use this by default)
 * @param textRight : Align the text to the right
 * @param textLeft : Align the text to the left
 */
const Button = styled.button`
  width: ${p => (p.fluidWidth ? "100%" : "auto")};
  height: ${p => (p.fluidHeight ? "100%" : "auto")};
  padding: 0.4em 1em;
  border: none;
  color: #fff;
  font-size: 1em;
  font-weight: 300;
  text-align: ${p =>
    p.textCenter ? "center" : p.textRight ? "right" : "left"};
  border-radius: ${p => p.theme.borderRadius};
  background-color: ${p => p.theme.primaryColor};
`;

Button.propTypes = {
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

export default Button;
