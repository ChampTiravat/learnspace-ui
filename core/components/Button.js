import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * @name Button
 * @desc General purposes button with basic styling
 * @param fluidWidth : Expand the width to match the parent component
 * @param fluidHeight : Expand the height to match the parent component
 * @param textCenter : Center the text (use this by default)
 * @param textRight : Align the text to the right
 * @param textLeft : Align the text to the left
 * @param rounded : 50% radius so the button would looks like a circle
 */
export const Button = styled.button`
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
  background-color: ${p =>
    p.primary
      ? p.theme.PRIMARY_COLOR
      : p.info
        ? p.theme.INFO_COLOR
        : p.danger
          ? p.theme.DANGER_COLOR
          : p.warning
            ? p.theme.WARNING_COLOR
            : p.success
              ? p.theme.SUCCESS_COLOR
              : p.light ? "#fff" : p.theme.PRIMARY_COLOR};
  color: ${p => (p.light ? p.theme.PRIMARY_COLOR : "#fff")};
`;

export const CircleButton = Button.extend`
  position: ${p => p.position || "static"};
  right: ${p => p.right || ""};
  left: ${p => p.left || ""};
  bottom: ${p => p.bottom || ""};
  top: ${p => p.top || ""};
  border-radius: 50%;
  padding: ${p => p.padding || "0.5em 1em"};
  font-size: 1.1em;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: 150ms ease-in;
  color: ${p => (p.light ? p.theme.PRIMARY_COLOR : "#fff")};
  background-color: ${p =>
    p.primary
      ? p.theme.PRIMARY_COLOR
      : p.info
        ? p.theme.INFO_COLOR
        : p.danger
          ? p.theme.DANGER_COLOR
          : p.warning
            ? p.theme.WARNING_COLOR
            : p.success
              ? p.theme.SUCCESS_COLOR
              : p.light ? "#fff" : p.theme.PRIMARY_COLOR};
  &:hover {
    background-color: #fff;
    color: ${p =>
      p.primary
        ? p.theme.PRIMARY_COLOR
        : p.info
          ? p.theme.INFO_COLOR
          : p.danger
            ? p.theme.DANGER_COLOR
            : p.warning
              ? p.theme.WARNING_COLOR
              : p.success
                ? p.theme.SUCCESS_COLOR
                : p.light ? p.theme.PRIMARY_COLOR : ""};
  }
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
