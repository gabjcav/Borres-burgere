import PageTitle from '../components/PageTitle';
import { useState, useEffect } from 'react';
import queryFirebase from '../config/firebase';
import InfoContainer from '../components/InfoContainer';
import MenuSkeleton from '../components/MenuSkeleton';



const Fries = () => {
    const [fries, setFries] = useState([]);
    //fbError means Firebase error
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
        queryFirebase('food', ["type", '==', "fries"])
        .then((result) => setFries(result.docs))
        .catch((error) => setFbError(error))
    }, [])

    
    
    const renderSkeleton = () => {
        return(
            <MenuSkeleton />
        )
    }
    
    const renderData = () => {
        
        return (
            <>
                {fries && <InfoContainer>
                    <h2>Meny</h2>
                    {/* "fries?." means "if(fries)" */}
                    {fries?.map((frie) => {
                        //Must have .data() because firebase works like that
                        const f = frie.data();
                        return (
                        <div key={frie.id}>
                            <p>{f.name}</p>
                            <p>{f.price},-</p>
                            <button id={frie.id}>Legg til</button>
                        </div> 
                        ) 
                        
                    })}
                    
                </InfoContainer>}
            </>
        )
            
        
    }
    return(
        <>
            <PageTitle>Fries</PageTitle>
            {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
            {(fries.length === 0) ? renderSkeleton() : renderData()}
            
        </>
    )
}

export default Fries;