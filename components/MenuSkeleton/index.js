import styled from 'styled-components';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'; 
const MenuSkeletonStyle = styled.div`
    background-color: #5a6b86;
    padding: 10px;  
    color: white;
    font-family: 'Impact', sans-serif; 
    font-size: 2rem; 
    width: 80%; 
    height: 1200px; 
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
        height: 22%; 
        display: flex;
        align-items: center;
        justify-content: center; 
        flex-direction: column; 
    }
    #cart-length {
        font-size: 1.2rem;
    }

    @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    min-height: 50%;
    margin: 20% auto;


    #cart-length {
      font-size: 1.3rem;
      font-family: sans-serif;
    }
    button {
      height: 20px;
      border-radius: 10px;
      background-color: #5a6b86;
      color: white;
      border: none;
      font-size: 0.8rem;
      cursor: pointer;
      -webkit-box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.47) #9b9b9b;
      font-family: sans-serif;
    }
  }
`


const MenuSkeleton = () => {
    return(
        <MenuSkeletonStyle>
            <h2>Meny</h2>
            <p id="cart-length">Produkter i handlekurv: ...</p>
            <SkeletonTheme 
                color="white" 
                highlightColor="#5a6b86"
                as="div">
                <p>
                    <Skeleton 
                        duration={.85}
                        circle={true} 
                        height={100} 
                        width={100}
                    />
                </p>
            </SkeletonTheme> 
            <SkeletonTheme 
                color="white" 
                highlightColor="#5a6b86"
                as="div">
                <p>
                    <Skeleton 
                        duration={.85}
                        circle={true} 
                        height={100} 
                        width={100}
                    />
                </p>
            </SkeletonTheme> 
            <SkeletonTheme 
                color="white" 
                highlightColor="#5a6b86"
                as="div">
                <p>
                    <Skeleton 
                        duration={.85}
                        circle={true} 
                        height={100} 
                        width={100}
                    />
                </p>
            </SkeletonTheme>  
            
        </MenuSkeletonStyle>
    )
}
export default MenuSkeleton;