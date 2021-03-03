import PageTitle from '../components/PageTitle';
import { useEffect, useState } from 'react';
import InfoContainer from '../components/InfoContainer';
import queryFirebase from '../config/firebase';
import MenuSkeleton from '../components/MenuSkeleton';
const Burgers = () => {
    const [burgers, setBurgers] = useState([]);
    const [fbError, setFbError] = useState(null);

    // henter data hver gang side lastes
    useEffect(() => {
        queryFirebase('food', ["type", '==', "burger"])
        .then((result) => setBurgers(result.docs))
        .catch((error) => setFbError(error))
    }, [])

      console.log(fbError); 



    const renderSkeleton = () => {
      return(
          <MenuSkeleton />
      )
    } 

    

    const renderData = () => {

      return(
        <>
          {burgers && <InfoContainer>
            <h2>Meny</h2>
              {/* "burgers?." means "if(burgers)" */}
              {burgers?.map((burger) => {
                const b = burger.data();
                return (
                  <div key={b.id}>
                    <p>{b.name}</p>
                    <p>{b.price},-</p>
                    <button>Legg til</button>
                  </div> 
                ) 
              })}
          </InfoContainer>}
        </>
      )
    }
    return(
        <>
          <PageTitle>Burgere</PageTitle>
          {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
          {(burgers.length === 0) ? renderSkeleton() : renderData()}
        </>
    )
}


export default Burgers;