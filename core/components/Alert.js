import styled from 'styled-components'

/**
 * @name ErrorAlert
 * @desc Use to display error which occured when performing some operations
 * @prop { show } : Specify wether to show this alert or not
 */
export const ErrorAlert = styled.div`
  display: ${p => (p.show ? 'inline-block' : 'none')};
  background-color: ${p => p.theme.DANGER_COLOR};
  border-radius: ${p => p.theme.BORDER_RADIUS};
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  transition: all 150ms;
  text-align: center;
  padding: 1em 3em;
  font-size: 1.2em;
  position: fixed;
  cursor: pointer;
  border: none;
  color: #fff;
  bottom: 5em;
  z-index: 99;
  right: 3em;
  &:active {
    transform: scale(1.05);
  }
`
