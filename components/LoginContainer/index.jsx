import styled from 'styled-components';

const LoginContainer = styled.form`
    height: 600px;
    width: 450px;
    display: grid; 
    background-color: #5a6b86;
    margin: 0 auto; 
    padding: 20px; 
    -webkit-box-shadow: 0px 2px 9px 2px #9b9b9b;
    border-radius: 10px; 
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
            border-radius: 3px; 
            height: 10%; 
        }
        label{
            color: white;
            text-align: left; 
        }
    }
    button{
        width: 90px; 
        height: 60px; 
        cursor: pointer;
        border-radius: 5px; 
        background-color: white;
        font-size: .9rem; 
        color: white; 
        border: 2px solid white; 
        font-family: sans-serif; 
        font-weight: 600; 
        background-color: #5a6b86; 
        letter-spacing: 1px; 
        transition: .5s ease; 
        &:hover{
            color: #5a6b86;
            background-color: white; 
            
        }
    }
    #btn-container{
        display: flex; 
        flex-direction: row;
        padding-top: 30px; 
        
    }

    p{
        color: white; 
        font-size: 1.2rem; 
    }
`

export default LoginContainer;