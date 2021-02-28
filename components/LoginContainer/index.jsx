import styled from 'styled-components';

const LoginContainer = styled.form`
    height: 600px;
    width: 450px;
    display: grid; 
    background-color: #5a6b86;
    margin: 0 auto; 
    padding: 10px; 
    -webkit-box-shadow: 0px 2px 9px 2px #9b9b9b;

    h1{
        color: white; 
        margin: 0 auto; 
    }
    div{
        display: flex; 
        flex-direction:column;
        gap: 20px;
        input{
            border: 1px solid #3d3d3d; 
            background: #ffffff;
        }
        label{
            color: white;
        }
    }
    button{
        width: 70px; 
        height: 40px; 
        cursor: pointer;
        border-radius: 5px; 
        background-color: white;
        font-size: .7rem;
        
    }
    #btn-container{
        display: flex; 
        flex-direction: row;
    }
`

export default LoginContainer;