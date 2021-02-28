import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import { useState, useEffect } from 'react';
import firebaseInstance from '../config/firebase';
import InfoContainer from '../components/InfoContainer';
import queryFirebase from '../config/firebase'; 
const ChickenBurgers = () => {

    const [chickenBurgers, setChickenBurgers] = useState(null);
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
      queryFirebase('food', ["type", '==', "chickenburger"])
      .then((result) => setChickenBurgers(result.docs))
      .catch((error) => setFbError(error))
  }, [])
    return(
        <>
          <PageTitle>Kyllingburgere</PageTitle>
          {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
          {chickenBurgers && <InfoContainer>
            <h2>Meny</h2>
              {/* "chickenBurgers?." betyr "if(chickenBurgers)" */}
              {chickenBurgers?.map((chickenburger) => {
                const cb = chickenburger.data();
                return (
                  <div key={cb.id}>
                    <p>{cb.name}</p>
                    <p>{cb.price},-</p>
                    <button>Kjøp</button>
                    <p>{cb.image}</p>
                  </div> 
                ) 
              })}
          </InfoContainer>}
        </>
    )
}

export default ChickenBurgers;