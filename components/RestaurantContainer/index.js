import styled from 'styled-components'

const RestaurantContainer = styled.article`
min-width: 60%; 
max-width: 90%; 
margin: 0 auto; 
    h1{
        margin-bottom: 10%; 
    }
    h2{
        font-size: 2rem; 
    }
    .ordre-container{
    min-width: 50%; 
    max-width: 90%; 
    max-height: 70%;
    overflow-y: auto; 
    margin: 0 auto; 
    gap: 10%; 
    display: grid; 
    grid-template-columns: repeat(2,1fr); 
        #complete-container{
        background-color: white; 
        color: #5a6b86;
        padding: 5%; 
        border-radius: 10px; 
        border: 2px solid #5a6b86; 
        p{
            font-size: 1.4rem;
            background-color: #5a6b86; 
            color: white;  
            border: 2px solid #5a6b86;
            border-radius: 3%;
            width: 40%;
            margin: 0 auto; 
            margin-bottom: 5%; 
            padding: 10px; 
            text-align: center; 
        }
    }
        #incomplete-container{
            background-color: #5a6b86; 
            color: white;
            padding: 5%; 
            border-radius: 10px; 
            p{
                font-size: 1.4rem; 
                border: 2px solid white;
                border-radius: 3%;
                width: 40%;
                margin: 0 auto; 
                background-color: white;
                color: #5a6b86; 
                margin-bottom: 5%; 
                padding: 10px; 
                text-align: center; 
            }
            h2{
                color: white;

            }
        }
        .info{
            display: grid;
            grid-auto-columns: auto;  
        }
        h2{
            margin-bottom: 20%; 
            margin-top: 15%; 
        }
        .container{
            display: grid;
            grid-template-columns: repeat(3, 1fr); 
        }
        }
    
`

export default RestaurantContainer