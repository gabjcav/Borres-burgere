import styled from 'styled-components'
import Link from 'next/link'
// import logo  from '../../public/img/logo.png';
import Image from 'next/image'
import { useAuth } from '../../helper/context'

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
    :nth-child(n + 1) {
      :hover {
        color: #b6b6b6;
      }
    }

    :nth-child(6) {
      margin-top: 400px;
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
  #bottom-info {
    margin-bottom: 5%;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 20%;
    position: relative;
    margin-top: 0;
    .line {
      display: none;
    }
    ul {
      margin-top: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    li {
      display: inline-block;
      font-size: 1rem;
      font-family: sans-serif;
      margin-bottom: 0;

      .link {
        margin-bottom: 30px;
        text-align: center;
      }
    }
    #bottom-info {
      margin-bottom: 0;
      font-size: 0.5rem;
      display: flex;
      flex-direction: row;
    }
  }
`

const NavBar = () => {
  const { isAuthenticated } = useAuth()

  return (
    <NavContainer>
      <ul>
        <li>
          <div className="logo-container">
            <Link href="/">
              <img className="logo" src="/img/logofinal.svg" />
            </Link>
          </div>

          <div className="line"></div>
        </li>

        <li>
          <span className="link">
            <Link href="/burgers">Burgere</Link>
          </span>
        </li>
        <li>
          <span className="link">
            <Link href="/chicken-burgers">Kyllingburgere</Link>
          </span>
        </li>
        <li>
          <span className="link">
            <Link href="/fries">Fries</Link>
          </span>
        </li>
        <li>
          <span className="link">
            <Link href="/drinks">Drikke</Link>
          </span>
          <div className="line"></div>
        </li>
        <span id="bottom-info">
          {isAuthenticated && (
            <li>
              <span className="link">
                <Link href="/cart">
                  <span id="nav-cart">Handlekurv</span>
                </Link>
              </span>
            </li>
          )}
          <li>
            {isAuthenticated && (
              <span className="link">
                <Link href="/order-status">Status</Link>
              </span>
            )}
          </li>
          <li>
            {isAuthenticated && (
              <span className="link">
                <Link href="/profile">Profil</Link>
              </span>
            )}
            {!isAuthenticated && (
              <span className="link">
                <Link href="/login">Logg inn</Link>
              </span>
            )}
          </li>
        </span>
      </ul>
    </NavContainer>
  )
}

export default NavBar
