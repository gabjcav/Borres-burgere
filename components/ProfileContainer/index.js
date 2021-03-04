import styled from 'styled-components';


const ProfileContainer = styled.article`
    height: 600px;
    width: 550px;
    display: grid; 
    background-color: #5a6b86;
    margin: 0 auto; 
    padding: 20px; 
    -webkit-box-shadow: 0px 2px 9px 2px #9b9b9b;
    border-radius: 10px; 
    font-family: 'Impact', sans-serif;
    font-size: 2rem; 
    color: white; 
    button{
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
        border: 2px solid white;
        transition: .5s ease; 
        :hover{
            color: #5a6b86;
            background-color: white; 
             
        }
    }
    .profile-span{
        font-size: 1.5rem; 
        display: block; 
        margin-bottom: 10px; 
    }
`

export default ProfileContainer;