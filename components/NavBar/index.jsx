import styled from 'styled-components';
import Link from 'next/link';


export const NavContainer = styled.nav`
    width: 250px;
    position: fixed;
    background-color: blue; 
    height: 100%;
    ul{
        list-style: none;
    }
    li{
        font-size: 2.5rem;
        margin-bottom: 30px; 
        
        padding: 10px; 

        :nth-child(3){
            font-size: 2rem; 
        }
        :nth-child(6){
            margin-top: 400px;  
        }
    }

   
`


const NavBar = () => {
    return (
        <NavContainer>
            <ul>
                <li>
                    <Link href="/">LOGO</Link>
                </li>
                <li>
                    <Link href="/burgers">Burgers</Link>
                </li>
                <li>
                    <Link href="/chicken-burgers">Chicken burgers</Link>
                </li>
                <li>
                    <Link href="/fries">Fries</Link>
                </li>
                <li>
                    <Link href="/drinks">Drinks</Link>
                </li>
                <li>
                    <Link href="/">Login</Link>
                </li>
                    

            </ul>
            
        </NavContainer>
    )
}

export default NavBar; 