import styled, { keyframes } from 'styled-components'

const BORDER_FADE_ANIMATION = keyframes`
    from { border: 2px solid ${p => p.theme.PRIMARY_COLOR}; }
      to { border: 2px solid #fff; }
`
const LoadingSpinner = styled.div`
  width: 170px;
  padding: 1.3em;
  margin: 5em auto;
  border-radius: 15px;
  border: 2px solid #fff;
  box-shadow: 0 5px 50px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: ${p => p.theme.PRIMARY_COLOR};
  font-size: 1.4em;
  font-weight: 500;
  text-align: center;
  animation: ${BORDER_FADE_ANIMATION} 300ms infinite;
`
/**
 * @name LoadingIcon
 * @desc Display loading icon when the page is loading
 */
const LoadingIcon = () => <LoadingSpinner>Loading</LoadingSpinner>

export default LoadingIcon
