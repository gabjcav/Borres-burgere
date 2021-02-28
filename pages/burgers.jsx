import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import firebaseInstance from '../config/firebase';
import { useEffect, useState } from 'react';
import InfoContainer from '../components/InfoContainer';

const Burgers = () => {
    const [burgers, setBurgers] = useState(null);
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
      firebaseInstance
        .firestore()
        .collection('food')
        .where("type", '==', "burger")
        .get()
        .then((result) => setBurgers(result.docs))
        .catch((error) => setFbError(error))
    }, [])
      
    return(
        <>
            <NavContainer>
                <NavBar />
            </NavContainer>
            <MainContainer>
                <PageTitle>Burgere</PageTitle>
                {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
                {burgers && <InfoContainer>
                    {/* "burgers?." means "if(burgers)" */}
                    {burgers?.map((burger) => {
                      const b = burger.data();
                      return (
                        <div key={b.id}>
                          <p>{b.name}</p>
                          <p>{b.price},-</p>
                          <p>{b.image}</p>
                        </div> 
                      ) 
                    })}
                </InfoContainer>}

            </MainContainer>
        </>
    )
}


export default Burgers;