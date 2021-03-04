import '../styles/globals.css' 
import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import { AuthProvider } from '../helper/context';

function MyApp({ Component, pageProps }) {

  return (
      <AuthProvider>
          <NavContainer>
                <NavBar />
          </NavContainer>
          <MainContainer>
            <Component {...pageProps} />
          </MainContainer>
      </AuthProvider>
  )
}

export default MyApp
