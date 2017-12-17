import styled from "styled-components";

/**
 * @name Panel
 * @desc Seperate a layout into 2 parts
 * @prop width(%)
 * @prop height
 * @prop padding
 * @prop paddingTop
 * @prop paddingBottom
 * @prop paddingLeft
 * @prop paddingRight
 * @prop left
 * @prop right
 */
const Panel = styled.div`
  display: inline-block;
  width: ${p => p.width}%;
  height: ${p => p.height || "100%"};
  padding: ${p => p.padding || "0"};
  padding-top: ${p => p.paddingTop || "0"};
  padding-bottom: ${p => p.paddingBottom || "0"};
  padding-left: ${p => p.paddingLeft || "0"};
  padding-right: ${p => p.paddingRight || "0"};
  float: ${p => (p.left ? "left" : p.right ? "right" : "clear")};
`;

export default Panel;
