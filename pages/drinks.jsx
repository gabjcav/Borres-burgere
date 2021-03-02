import PageTitle from '../components/PageTitle';
import { useState, useEffect } from 'react';
import queryFirebase from '../config/firebase'; 
import InfoContainer from '../components/InfoContainer';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import MenuSkeleton from '../components/MenuSkeleton';
const Drinks = () => {
    const [drinks, setDrinks] = useState([]);
    //fbError means Firebase error
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
      queryFirebase('food', ["type", '==', "aosdknadd"])
      .then((result) => setDrinks(result.docs))
      .catch((error) => setFbError(error))
    }, [])


  const renderSkeleton = () => {
    return(
        
          // <SkeletonTheme color="#e6e6e6" highlightColor="#whitesmoke">
          //   <p><Skeleton duration={.8} circle={true} height={200} width={200}/></p>
          // </SkeletonTheme>
        <MenuSkeleton />
    )
  }


  const renderData = () => {
    return(
      <>
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
                <PageTitle>Drikke</PageTitle>
                {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
                {(drinks.length === 0) ? renderSkeleton() : renderData()} 
                
        </>
    )
}

export default Drinks;