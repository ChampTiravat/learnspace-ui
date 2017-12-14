import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * @name Card
 * @desc Card component (default width is 500px width)
 * @prop marginTop : top margin
 * @prop marginBottom : bottom margin
 * @prop marginLeft : left margin
 * @prop marginRight : right margin
 * @prop padding : Padding on every sides
 * @prop small : display a small card (400px width)
 * @prop large : display a large card (700px width)
 * @prop fluidWidth : Expand the width to match it's parent component
 * @prop textCenter : align text to the center
 */
const Card = styled.div`
  width: 100%;
  max-width: ${p =>
    (p.large && "700px") ||
    (p.small ? "400px" : p.fluidWidth ? "100%" : "500px")};
  height: ${p => p.height || "auto"};
  background-color: #fff;
  margin-top: ${p => p.marginTop || "0"};
  margin-bottom: ${p => p.marginBottom || "0"};
  margin-left: ${p => p.marginLeft || "auto"};
  margin-right: ${p => p.marginRight || "auto"};
  padding: ${p => p.padding || "0"};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  text-align: ${p => (p.textCenter ? "center" : "left")};
`;

Card.propTypes = {
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  small: PropTypes.bool,
  large: PropTypes.bool
};

export const Header = styled.div`
  padding: 1.2em;
  margin: 0 auto;
  text-align: center;
  font-family: "Kanit";
  font-size: 1em;
  font-weight: 400;
  color: ${p => p.theme.primaryColor};
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
`;

export const Footer = styled.div`
  padding: 0.9em;
  margin: 0 auto;
  text-align: ${p => (p.textCenter ? "center" : "left")};
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
`;

/**
 * @param overflowY : set the CSS overflow property on Y axis
 * @param height : custom height
 */
export const Body = styled.div`
  padding: 0.9em;
  margin: 0 auto;
  text-align: left;
  font-size: 1em;
  font-weight: 300;
  font-color: ${({ theme }) => theme.textColor};
  height: ${p => p.height || "auto"};
  overflow-y: ${p => p.overflowY || "auto"};
`;

export default Card;
