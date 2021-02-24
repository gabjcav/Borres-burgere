import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import GlobalStyle from '../components/GlobalStyle';

export default function Home() {
  return(
      <>
        <GlobalStyle />
        <NavContainer as='main'>
          <NavBar />
        </NavContainer>
      </>
    
  )
}


