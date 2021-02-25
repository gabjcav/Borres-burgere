import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import GlobalStyle from '../components/GlobalStyle';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
export default function Home() {
  return(
      <>
        <GlobalStyle />
        <NavContainer as='main'>
          <NavBar />
        </NavContainer>
        <MainContainer>
          <PageTitle><span id="home-title">BØRRES BURGERE</span></PageTitle>
          <Link href="/login"><button id="login-btn">Logg inn</button></Link>
          
        </MainContainer>
      </>
    
  )
}


