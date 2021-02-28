import styled from 'styled-components'; 

const CartContainer = styled.div`
    background-color: #5a6b86; 
    width: 30%; 
    height: 500px;
    margin: 0 auto; 
    color: white; 
    border-radius: 10px;
    -webkit-box-shadow: 2px 2px 10px 2px #9b9b9b; 
    ul{
        list-style: none; 
        display: flex; 
        flex-direction: row; 
        width: 50%; 
        margin: 0 auto; 
        justify-content: space-between; 
        border: 2px dashed white; 
        border-radius: 6px; 
        padding: 10px; 
        li{
            color: white; 
        }
    }
    .line{
        height: 2px;
        background-color: white; 
        margin-bottom: 30px; 
    }
`
export default CartContainer; 