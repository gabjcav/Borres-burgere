import '../styles/globals.css' 
import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavContainer>
            <NavBar />
      </NavContainer>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </>
  )
}

export default MyApp
