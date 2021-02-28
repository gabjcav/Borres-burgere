import PageTitle from '../components/PageTitle';
import { useEffect, useState } from 'react';
import InfoContainer from '../components/InfoContainer';
import queryFirebase from '../config/firebase';
const Burgers = () => {
    const [burgers, setBurgers] = useState(null);
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
        queryFirebase('food', ["type", '==', "burger"])
        .then((result) => setBurgers(result.docs))
        .catch((error) => setFbError(error))
    }, [])
      console.log(fbError); 
    return(
        <>
          <PageTitle>Burgere</PageTitle>
          {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
          {burgers && <InfoContainer>
            <h2>Meny</h2>
              {/* "burgers?." means "if(burgers)" */}
              {burgers?.map((burger) => {
                const b = burger.data();
                return (
                  <div key={b.id}>
                    <p>{b.name}</p>
                    <p>{b.price},-</p>
                    <button>Kjøp</button>
                    <p>{b.image}</p>
                  </div> 
                ) 
              })}
          </InfoContainer>}
        </>
    )
}


export default Burgers;