import styled from "styled-components";

const Panel = styled.div`
  display: inline-block;
  width: ${p => p.width}%;
  height: 100%;
  float: ${p => (p.left ? "left" : p.right ? "right" : "clear")};
`;

export default Panel;
