import styled from 'styled-components'
import theme from '../../helper/theme'

const MainContainer = styled.main`
  margin-left: 350px;
  background-color: #ffffff;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  text-align: center;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 20%;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(1, 2fr);
  }
`

export default MainContainer
