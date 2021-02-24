import styled from 'styled-components';

const LoginContainer = styled.div`
    height: 600px;
    width: 450px;
    display: grid; 
    background-color: #2e0e0e;
    h1{
        color: white; 
        margin: 0 auto; 
    }
    div{
        display: flex; 
        flex-direction:column;
        gap: 20px;
        input{
            border: 3px solid #6d6d6d; 
            background: #c8c8c8;
        }
    }
    button{
        width: 80px; 
        height: 50px; 
        cursor: pointer;
    }
`

export default LoginContainer;