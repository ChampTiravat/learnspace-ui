import styled from "styled-components";

/**
 * @desc Used to set the wallpaper if the page
 * @prop pageName : Specify page's name and it will automatically looking for the associated background image
 */
const Wallpaper = styled.div`
  padding: 0;
  margin: 0;
  with: 100%;
  height: 100vh;
  background-image: url("/static/images/background/${p =>
    p.pageName}-background.jpg");
  background-size: 100%;
`;

export default Wallpaper;
