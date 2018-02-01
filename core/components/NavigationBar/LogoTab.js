import styled from 'styled-components'

const LogoTab = styled.div`
  display: inline-block;
  color: #fff;
  width: ${p => (p.authenticated ? '15%' : '50%')};
  a {
    background-color: #3a82ea;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    color: inherit;
    font-size: 1.2em;
    font-weight: 400;
  }
  @media (max-width: 900px) {
    text-align: center;
    display: block;
    width: 100%;
  }
`

export default LogoTab
