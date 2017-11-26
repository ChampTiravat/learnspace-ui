import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * @name Card
 * @desc Card component (default width is 500px width)
 * @prop marginTop : top margin
 * @prop marginBottom : bottom margin
 * @prop marginLeft : left margin
 * @prop marginRight : right margin
 * @prop small : display a small card (400px width)
 * @prop large : display a large card (700px width)
 */
const Card = styled.div`
  width: 100%;
  max-width: ${p => (p.large && "700px") || (p.small ? "400px" : "500px")};
  height: auto;
  background-color: #fff;
  margin-top: ${p => p.marginTop || "0"};
  margin-bottom: ${p => p.marginBottom || "0"};
  margin-left: ${p => p.marginLeft || "auto"};
  margin-right: ${p => p.marginRight || "auto"};
  padding: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
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
  font-size: 1em;
  font-weight: 400;
  color: ${p => p.theme.primaryColor};
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
`;

export const Footer = styled.div`
  padding: 0.9em;
  margin: 0 auto;
  text-align: left;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
`;

export const Body = styled.div`
  padding: 0.9em;
  margin: 0 auto;
  text-align: left;
  font-size: 1em;
  font-weight: 300;
  font-color: ${({ theme }) => theme.textColor};
`;

export default Card;
