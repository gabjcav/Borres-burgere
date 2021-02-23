import styled from 'styled-components';
import Link from 'next/link';
// import logo from '../../public/img/logo.png'

export const NavContainer = styled.nav`
    width: 300px;
    position: fixed;
    background-color: #2e0e0e; 
    height: 100%;
    color: white; 
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
                    <Link href="/">Logo</Link>
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
                </li>
                <li>
                    <Link href="/login">Logg inn</Link>
                </li>
                    

            </ul>
            
        </NavContainer>
    )
}

export default NavBar; 