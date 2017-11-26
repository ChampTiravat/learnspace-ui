import styled from "styled-components";

/**
 * @desc Wrap all components. So, everything should align perfectly centered
 * @prop transparent : if this prop exist, the background will be transparent
 */
const Container = styled.div`
  padding-top: 3.3em;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
  height: auto;
  background: ${p => (p.transparent ? "transparent" : "#f5f5f5")};
`;

export default Container;
