import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
import { useState, useEffect } from 'react';
import firebaseInstance from '../config/firebase';
const Fries = () => {

    const [fries, setFries] = useState(null);
    //fbError means Firebase error
    const [fbError, setFbError] = useState(null);

    useEffect(() => {
      firebaseInstance
        .firestore()
        .collection('food')
        .where("type", '==', "fries")
        .get()
        .then((result) => setFries(result.docs))
        .catch((error) => setFbError(error))
    }, [])

    return(
        <>
            <NavContainer>
                <NavBar />
            </NavContainer>
            <MainContainer>
                <PageTitle>Fries</PageTitle>
            </MainContainer>
            {fbError && <p>An error has occured: {JSON.stringify(fbError, null, 2)}</p>}
                {fries && <table className ="info-container">
                  <thead>
                    <tr>
                      <td>Price</td>
                      <td>Name</td>
                      <td>Image</td>
                    </tr>
                  </thead>
                  <tbody>
                    {/* "fries?." means "if(fries)" */}
                    {fries?.map((frie) => {
                        //Must have .data() because firebase works like that
                      const f = frie.data();
                      return (
                        <tr key={f.id}>
                          <td>{f.price}</td>
                          <td>{f.name}</td>
                          <td>{f.image}</td>
                        </tr> 
                      ) 
                    })}
                  </tbody>
                </table>}
        </>
    )
}

export default Fries;