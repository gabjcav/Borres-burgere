import '../styles/globals.css' 
import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import { AuthProvider } from '../helper/context';
import { Cart } from '../helper/cartContext.js';
import { ThemeProvider } from 'styled-components';
import theme from '../helper/theme'; 

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
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
      </ThemeProvider>
  )
}

export default MyApp
