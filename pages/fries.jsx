import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import { useState, useEffect } from 'react';
import queryFirebase from '../config/firebase';
import InfoContainer from '../components/InfoContainer';
const Fries = () => {

    const [fries, setFries] = useState(null);
    //fbError means Firebase error
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
        queryFirebase('food', ["type", '==', "fries"])
        .then((result) => setFries(result.docs))
        .catch((error) => setFbError(error))
    }, [])

    return(
        <>
            <PageTitle>Fries</PageTitle>
            {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
            {fries && <InfoContainer>
                <h2>Meny</h2>
                {/* "fries?." means "if(fries)" */}
                {fries?.map((frie) => {
                    //Must have .data() because firebase works like that
                    const f = frie.data();
                    return (
                    <div key={f.id}>
                        <p>{f.name}</p>
                        <p>{f.price},-</p>
                        <button>Legg til</button>
                    </div> 
                    ) 
                })}
                
            </InfoContainer>}
        </>
    )
}

export default Fries;