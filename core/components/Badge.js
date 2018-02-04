import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'

export const BasedBadge = styled.div`
  color: ${p => p.theme.TEXT_COLOR};
  background-color: #fff;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  margin-bottom: 3px;
  margin-left: 0.7em;
  font-size: 11px;
  margin-right: 0;
  margin-top: 0;
  border: none;
  padding: 5px;
  width: 28px;
`

export const InfoBadge = BasedBadge.extend`
  background-color: ${p => p.theme.INFO_COLOR};
  color: #fff;
`
