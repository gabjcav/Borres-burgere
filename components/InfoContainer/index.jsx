import styled from 'styled-components';

const InfoContainer = styled.section`
    background-color: #5a6b86;
    padding: 10px;  
    color: white;
    font-family: 'Impact', sans-serif; 
    font-size: 2rem; 
    width: 80%; 
    height: 800px; 
    margin: 0; 
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    -webkit-box-shadow: 2px 2px 10px 2px #9b9b9b;
    gap: 40px; 
    align-items: center; 
    border-radius: 10px; 
    div{
        background-color: white;
        color: #5a6b86;
        width: 70%; 
        border-radius: 10px; 
    }
`

export default InfoContainer; 