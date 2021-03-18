import styled from 'styled-components'

const InfoContainer = styled.article`
  background-color: #5a6b86;
  padding: 10px;
  color: white;
  font-family: 'Impact', sans-serif;
  font-size: 2rem;
  width: 80%;
  height: 1200px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  -webkit-box-shadow: 2px 2px 10px 2px #9b9b9b;
  gap: 40px;
  align-items: center;
  border-radius: 10px;
  #cart-length {
    font-size: 1.2rem;
  }
  div {
    background-color: white;
    color: #5a6b86;
    width: 70%;
    border-radius: 10px;
    height: 22%;

    button {
      height: 50px;
      border-radius: 10px;
      background-color: #5a6b86;
      color: white;
      border: none;
      font-size: 1.3rem;
      cursor: pointer;
      -webkit-box-shadow: 2px 2px 10px 2px #9b9b9b;
      padding: 10px;
      font-family: 'Impact', sans-serif;
      letter-spacing: 2px;
      transition: 0.3s ease;
      border: 2px solid #5a6b86;
      :hover {
        color: #5a6b86;
        background-color: white;
      }
    }
  }
`

export default InfoContainer
