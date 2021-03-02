import PageTitle from '../components/PageTitle';
import { useState, useEffect } from 'react';
import InfoContainer from '../components/InfoContainer';
import queryFirebase from '../config/firebase'; 
import MenuSkeleton from '../components/MenuSkeleton';
const ChickenBurgers = () => {

    const [chickenBurgers, setChickenBurgers] = useState([]);
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
      queryFirebase('food', ["type", '==', "chickenburger"])
      .then((result) => setChickenBurgers(result.docs))
      .catch((error) => setFbError(error))
  }, [])

  const renderSkeleton = () => {
    return (
      <MenuSkeleton />
    )
  }

  const renderData = () => {
    return(
      <>
         {chickenBurgers && <InfoContainer>
            <h2>Meny</h2>
              {/* "chickenBurgers?." betyr "if(chickenBurgers)" */}
              {chickenBurgers?.map((chickenburger) => {
                const cb = chickenburger.data();
                return (
                  <div key={cb.id}>
                    <p>{cb.name}</p>
                    <p>{cb.price},-</p>
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
          <PageTitle>Kyllingburgere</PageTitle>
          {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
          {(chickenBurgers.length === 0) ? renderSkeleton() : renderData()} 
        </>
    )
}

export default ChickenBurgers;