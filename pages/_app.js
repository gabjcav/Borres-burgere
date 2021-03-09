import '../styles/globals.css' 
import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import { AuthProvider } from '../helper/context';
import { Cart } from '../helper/CartContext';
function MyApp({ Component, pageProps }) {

  return (
    <Cart>
        <AuthProvider>
            <NavContainer>
                  <NavBar />
            </NavContainer>
            <MainContainer>
              <Component {...pageProps} />
            </MainContainer>
        </AuthProvider>
      </Cart>
  )
}

export default MyApp
