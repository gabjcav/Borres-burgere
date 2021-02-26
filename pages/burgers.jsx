import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import firebaseInstance from '../config/firebase';
let food = [];
const Burgers = ({ error, food }) => {

    if(error !== undefined){
    
        return(
          <p>An error has occured: {error}</p>
        )
      }
      if(food.length !== 0){
        console.log(food); 
      }
    return(
        <>
            <NavContainer>
                <NavBar />
            </NavContainer>
            <MainContainer>
                <PageTitle>Burgere</PageTitle>
            </MainContainer>
        </>
    )
}

Burgers.getInitialProps = async () => {

    try {
  
      {/* await "firebaseInstance" istedenfor "firebase", instance laget config > firebase.jsx */}
      const burgerCollection = await firebaseInstance
        .firestore()
        .collection('food')
        .where("type", '==', "burger")
        .get();
      
      
      burgerCollection.forEach((item) => {
        food.push({
          id: item.id,
          ...item.data()
        })
      })
  
      return { food }
      
    } catch (error) {
      
      return {
        error: error.message
      }
    }
}

export default Burgers;