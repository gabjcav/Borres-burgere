import styled from 'styled-components';



const MainContainer = styled.main`
    margin-left: 350px;
    background-color: #ffffff; 
    height: 100vh; 
    display: grid;
    justify-content: center; 
    align-items: center; 
    grid-template-columns: repeat(1);
    #login-btn{
        width: 30%; 
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
        transition: .5s ease; 
        :hover{
            color: #5a6b86;
            background-color: white; 
             
        }
    }
    
`

export default MainContainer;