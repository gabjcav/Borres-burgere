import styled from 'styled-components';
import Link from 'next/link';


export const NavContainer = styled.nav`

`


const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                    <Link href="/burgers">Burgers</Link>
                    <Link href="/chicken-burgers">Chicken burgers</Link>
                    <Link href="/fries">Fries</Link>
                    <Link href="/drinks">Drinks</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar; 