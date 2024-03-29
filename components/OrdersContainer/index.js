import styled from 'styled-components'

const OrdersContainer = styled.article`
    
    min-width: 50%; 
    max-width: 80%; 
    margin: 0 auto; 
    ul{
        list-style: none; 
        text-align: center; 
        padding: 0; 
    }
    h1{
        margin-bottom: 20%; 
        margin-top: 15%; 
    }
    #container{
        
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5%; 
         
        .info{
            max-height: 500px;
            overflow-y: auto; 
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
                height: 50px; 
                border: none;
                font-family: sans-serif; 
                font-weight: bold; 
                font-size: 1rem; 
                border-radius: 10px; 
                transition: 0.5s ease;
                border: 1.5px solid white;
                cursor: pointer;
                &:hover{
                    color: white;
                    background-color: #5A8186;
                }
            }
        }
    }
    
    @media (max-width: 600px) {
        min-width: 50%; 
        max-width: 70%; 
        #container {
            display: flex;
            flex-direction: column; 
            gap: 20px; 
            font-size: 2rem; 
        }
    }
`

export default OrdersContainer;