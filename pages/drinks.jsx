import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import { useState, useEffect } from 'react';
import queryFirebase from '../config/firebase'; 
import InfoContainer from '../components/InfoContainer';
import MenuSkeleton from '../components/MenuSkeleton';
const Drinks = () => {
    const [drinks, setDrinks] = useState(null);
    //fbError means Firebase error
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
      queryFirebase('food', ["type", '==', "drink"])
      .then((result) => setDrinks(result.docs))
      .catch((error) => setFbError(error))
  }, [])
    return(
        <>
                <PageTitle>Drikke</PageTitle>
                {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
                {drinks && <InfoContainer>
                  <h2>Meny</h2>
                    {/* "drinks?." means "if(drinks)" */}
                    {drinks?.map((drink) => {
                        //Must have .data() because firebase works like that
                      const d = drink.data();
                      return (
                        <div key={d.id}>
                          <p>{d.name}</p>
                          <p>{d.price},-</p>
                          <button>Kjøp</button>
                          <p>{d.image}</p>
                        </div> 
                      ) 
                    })}
                </InfoContainer>}
        </>
    )
}

export default Drinks;