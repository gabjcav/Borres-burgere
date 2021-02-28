import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import { useState, useEffect } from 'react';
import firebaseInstance from '../config/firebase';
import InfoContainer from '../components/InfoContainer';
const Drinks = () => {
    const [drinks, setDrinks] = useState(null);
    //fbError means Firebase error
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
      firebaseInstance
        .firestore()
        .collection('food')
        .where("type", '==', "drink")
        .get()
        .then((result) => setDrinks(result.docs))
        .catch((error) => setFbError(error))
    }, [])
    return(
        <>
            <NavContainer>
                <NavBar />
            </NavContainer>
            <MainContainer>
                <PageTitle>Drikke</PageTitle>
                {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
                {drinks && <InfoContainer>
                    {/* "drinks?." means "if(drinks)" */}
                    {drinks?.map((drink) => {
                        //Must have .data() because firebase works like that
                      const d = drink.data();
                      return (
                        <div key={d.id}>
                          <p>{d.name}</p>
                          <p>{d.price},-</p>
                          <p>{d.image}</p>
                        </div> 
                      ) 
                    })}
                </InfoContainer>}
            </MainContainer>
            
        </>
    )
}

export default Drinks;