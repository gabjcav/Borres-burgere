import styled from 'styled-components'

const OrdersContainer = styled.article`
    
    min-width: 50%; 
    max-width: 80%; 
    margin: 0 auto; 
    h1{
        margin-bottom: 20%; 
        margin-top: 15%; 
    }
    #container{
        
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5%; 
        .info{
            -webkit-box-shadow: 7px 5px 4px -3px rgba(0,0,0,0.30); 
            box-shadow: 7px 5px 4px -3px rgba(0,0,0,0.30);
            background-color: #5a6b86;
            color: white; 
            border-radius: 3%; 
            padding: 25%; 
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            
            button{
                color: #5a6b86;
                background-color: white; 
                height: 150%; 
                border: none;
                border-radius: 10px; 
                transition: 0.5s ease;
                border: 1.5px solid white;
                cursor: pointer;
                &:hover{
                    color: white;
                    background-color: #5a6b86;
                }
            }
        }
    }
    
`

export default OrdersContainer;