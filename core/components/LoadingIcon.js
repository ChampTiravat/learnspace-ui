import styled, { keyframes } from 'styled-components'

const spinningAnimation = keyframes`
    0% { transform: rotate(0deg) scale(1); }
   50% { transform: rotate(45deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
`

const LoadingSpinner = styled.div`
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.2);
  color: ${p => p.theme.PRIMARY_COLOR};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  position: relative;
  margin: 5em auto;
  background: #fff;
  font-size: 1.4em;
  display: flex;
  height: 150px;
  width: 150px;
  &:before,
  &:after {
    top: -10px;
    left: -10px;
    content: '';
    width: 150px;
    height: 150px;
    display: block;
    position: absolute;
    border-radius: 50%;
    border: 10px solid transparent;
    border-top-color: ${p => p.theme.PRIMARY_COLOR};
    border-bottom-color: ${p => p.theme.PRIMARY_COLOR};
    animation: ${spinningAnimation} 800ms linear infinite;
  }
`

/**
 * @name LoadingIcon
 * @desc Display loading icon when the page is loading
 */
const LoadingIcon = () => <LoadingSpinner>Loading</LoadingSpinner>

export default LoadingIcon
