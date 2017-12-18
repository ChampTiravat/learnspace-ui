import styled from "styled-components";

/**
 * @name Container
 * @desc Wrap all components. So, everything should align perfectly centered
 * @prop transparent : if this prop exist, the background will be transparent
 * @prop marginTop
 * @prop marginBottom
 * @prop marginLeft
 * @prop marginRight
 * @prop margin
 */
const Container = styled.div`
  padding-top: 2.5em;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  margin: ${p => p.margin || "0 auto"}1;
  margin-top: ${p => p.marginTop || "0"};
  margin-bottom: ${p => p.marginBottom || "0"};
  margin-left: ${p => p.marginLeft || "auto"};
  margin-right: ${p => p.marginRight || "auto"};
  max-width: 1400px;
  width: 100%;
  height: auto;
  background: ${p => (p.transparent ? "transparent" : "#f5f5f5")};
`;

export default Container;
