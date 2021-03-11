import styled from 'styled-components';

const HomeContainer = styled.main`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15%;
  h2{
      background-color: #5a6b86; 
      padding: 1%; 
      border-radius: 3%; 
      color: white; 
  } 

  #login-btn {
    width: 10%;
    align-self: center;
    justify-self: center;
    height: 70px;
    background-color: #5a6b86;
    color: white;
    font-family: 'Impact', sans-serif;
    font-size: 1.7rem;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    border: 2px solid #5a6b86;
    transition: 0.5s ease;
    :hover {
      color: #5a6b86;
      background-color: white;
    }
  }
`
export default HomeContainer;