import styled from 'styled-components'
import Link from 'next/link'
// import logo  from '../../public/img/logo.png';
import Image from 'next/image'
import { useCart } from '../../helper/cartContext'
export const NavContainer = styled.nav`
  width: 350px;
  position: fixed;
  background-color: #5a6b86;
  height: 100%;
  color: white;
  font-family: 'Impact', sans-serif;
  margin: 0;
  -webkit-box-shadow: 2px 1px 7px 2px #9b9b9b;

  ul {
    list-style: none;
    margin: 0;
    margin-top: 9%;
  }
  li {
    font-size: 2.5rem;
    margin-bottom: 30px;
    padding: 10px;

    :nth-child(1) {
      :hover {
        color: #b6b6b6;
      }
    }
    :nth-child(2) {
      :hover {
        color: #b6b6b6;
      }
    }
    :nth-child(3) {
      :hover {
        color: #b6b6b6;
      }
    }
    :nth-child(4) {
      :hover {
        color: #b6b6b6;
      }
    }
    :nth-child(5) {
      :hover {
        color: #b6b6b6;
      }
    }
    :nth-child(6) {
      margin-top: 400px;
      :hover {
        color: #b6b6b6;
      }
    }
    :nth-child(7) {
      :hover {
        color: #b6b6b6;
      }
    }
  }

  .line {
    background-color: #ffffff;
    height: 3px;
    width: 85%;
    margin-top: 50px;
  }
  .logo {
    cursor: pointer;
    align-self: center;
    justify-self: center;
    height: 100%;
  }
  .logo-container {
    height: 100px;
  }
  #nav-cart {
    cursor: pointer;
  }
  #cart-counter {
    font-size: 1.7rem;
    margin-top: 100px;
  }
`

const NavBar = () => {
  const cart = useCart()
  const cartLength = cart.productLines.length
  console.log(cart.productLines.length)
  return (
    <NavContainer>
      <ul>
        <li>
          <div className="logo-container">
            <Link href="/">
              <Image className="logo" src="/img/logofinal.svg" width="100%" height="100%" />
            </Link>
          </div>

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
          <div className="line"></div>
        </li>
        <li>
          <Link href="/cart">
            <span id="nav-cart">
              Handlekurv <span id="cart-counter">{cartLength}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="/login">Logg inn</Link>
        </li>
      </ul>
    </NavContainer>
  )
}

export default NavBar
