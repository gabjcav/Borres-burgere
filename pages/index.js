import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import GlobalStyle from '../components/GlobalStyle';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import firebaseInstance from '../config/firebase';

export default function Home({error}) {

  if(error !== undefined){
    
    return(
      <p>An error has occured: {error}</p>
    )
  }

  return (
    <>
      
    <GlobalStyle />
    <NavContainer as='main'>
      <NavBar />
    </NavContainer>
    <MainContainer>
      <PageTitle><span id="home-title">VELKOMMEN</span></PageTitle>
      <Link href="/login"><button id="login-btn">Logg inn</button></Link>
      
    </MainContainer>
  </>
  )



  
}


Home.getInitialProps = async () => {
 
  try {

    {/* await "firebaseInstance" istedenfor "firebase", instance laget config > firebase.jsx */}
    const collection = await firebaseInstance.firestore().collection('food');
    const document = await collection.where("type", '==', "drink").get();

    if(document.exists !== true) {
      throw new Error('Document does not exist');
      
    }

    const food = {
      id: document.id,
      ...document.data()
    };

    return { food }

  } catch (error) {
    
    return {
      error: error.message
    }
  }
}