import styled from 'styled-components';
import Link from 'next/link';
// import logo  from '../../public/img/logo.png';
import Image from 'next/image'
export const NavContainer = styled.nav`
    width: 350px;
    position: fixed;
    background-color: #5a6b86; 
    height: 100%;
    color: white; 
    font-family: 'Impact', sans-serif;
    margin: 0;
    ul{
        list-style: none;
        margin: 0;
    }
    li{
        font-size: 2.5rem;
        margin-bottom: 30px; 
        padding: 10px; 


        :nth-child(1){
            color: white; 
        }

        :nth-child(6){
            margin-top: 400px;  
        }
    }

    .line{
        background-color: #ffffff;
        height: 3px;
        width : 85%;
    }
    .logo{
        cursor: pointer;
    }
    #bot-line{
        margin-top: 50px; 
    }
`;


const NavBar = () => {
    return (
        <NavContainer>
            <ul>
                <li>
                    <Link href="/"><Image className="logo" src='/img/logofinal.svg' width='100%' height='100%'/></Link>
                    <div className="line"></div>
                </li>
                
                <li>
                    <Link href="/burgers">Burgere</Link>
                </li>
                <li>
                    <Link href="/chicken-burgers">Kyllingburgere</Link>
                </li>
                <li>
                    <Link href="/fries">Fries</Link>
                </li>
                <li>
                    <Link href="/drinks">Drikke</Link>
                    <div id="bot-line" className="line"></div>
                </li>
                <li>
                    <Link href="/login">Logg inn</Link>
                </li>
                    

            </ul>
            
        </NavContainer>
    )
}

export default NavBar; 