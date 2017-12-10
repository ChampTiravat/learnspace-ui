import styled from "styled-components";

const Panel = styled.div`
  display: inline-block;
  width: ${p => p.width}%;
  height: 100%;
  padding: ${p => p.padding || "0"};
  padding-top: ${p => p.paddingTop || "0"};
  padding-bottom: ${p => p.paddingBottom || "0"};
  padding-left: ${p => p.paddingLeft || "0"};
  padding-right: ${p => p.paddingRight || "0"};
  float: ${p => (p.left ? "left" : p.right ? "right" : "clear")};
`;

export default Panel;
