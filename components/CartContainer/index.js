import styled from 'styled-components'; 

const CartContainer = styled.div`
    background-color: #5a6b86; 
    width: 30%; 
    height: 45%;
    margin: 0 auto; 
    color: white; 
    border-radius: 10px;
    -webkit-box-shadow: 2px 2px 10px 2px #9b9b9b; 
    ul{
        list-style: none; 
        display: flex; 
        flex-direction: column; 
        width: 80%; 
        margin: 0 auto; 
        justify-content: space-around; 
        border: 2px dashed white; 
        border-radius: 6px; 
        padding: 20px; 
        max-height: 40%; 
        min-height: 40%; 
        gap: 10px; 
        font-size: 1.4rem; 
        font-family: sans-serif; 
        overflow-y: auto; 
        p{
            margin-top: 100%;
        }
        li{
            color: white; 
            display: grid; 
            grid-template-columns: repeat(3, 1fr);

            #remove-btn{
                width: 60px; 
                height: 40px; 
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
                align-self: center;
                justify-self: center;
                 
                &:hover{
                color: #5a6b86;
                background-color: white; 
                
                }
            }
        }
    }
    #list-info{
        margin-bottom: 3%; 
    }
    .line{
        height: 2px;
        background-color: white; 
        margin-bottom: 30px; 
    }
    #total{
        margin-top: 5%; 
        font-size: 2rem; 
    }
    #button-container{
        display: grid; 
        max-width: 60%; 
        grid-template-columns: repeat(3, 1fr);
         position: relative;
        justify-content: center;
        align-items: center;  
        margin: 0 auto; 
        padding: 10px; 

        button {

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
            align-self: center;
            justify-self: center; 
            &:hover{
                color: #5a6b86;
                background-color: white; 
                
            }
        }

        
    }
    
`
export default CartContainer; 