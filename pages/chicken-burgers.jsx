import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import { useState, useEffect } from 'react';
import firebaseInstance from '../config/firebase';
import InfoContainer from '../components/InfoContainer';
const ChickenBurgers = () => {

    const [chickenBurgers, setChickenBurgers] = useState(null);
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
      firebaseInstance
        .firestore()
        .collection('food')
        .where("type", '==', "chickenburger")
        .get()
        .then((result) => setChickenBurgers(result.docs))
        .catch((error) => setFbError(error))
    }, [])
    return(
        <>
            <NavContainer>
                <NavBar />
            </NavContainer>
            <MainContainer>
                <PageTitle>Kyllingburgere</PageTitle>

                {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
                {chickenBurgers && <InfoContainer>
                  
                    {/* "chickenBurgers?." betyr "if(chickenBurgers)" */}
                    {chickenBurgers?.map((chickenburger) => {
                      const cb = chickenburger.data();
                      return (
                        <div key={cb.id}>
                          <p>{cb.name}</p>
                          <p>{cb.price},-</p>
                          <p>{cb.image}</p>
                        </div> 
                      ) 
                    })}
                
                </InfoContainer>}
            </MainContainer>
        </>
    )
}

export default ChickenBurgers;