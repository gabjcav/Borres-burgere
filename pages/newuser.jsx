import LoginContainer from '../components/LoginContainer';
import Link from 'next/link';
import firebase from 'firebase'; 
const NewUser = () => {

    

    const createUser = () => { 
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in 
        let user = userCredential.user;
        // ...
        })
        .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // ..
        });
    }

    return(
            <LoginContainer onSubmit={createUser}>
                <h1>Ny bruker</h1>
                <div>
                    <label htmlFor="username">Epost</label>
                    <input type="text" name="username" id="username"/>
                    <label htmlFor="password">Passord</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div id="btn-container">
                    <button onClick={createUser}>Fullfør</button>
                    <Link href='/'>
                        <button>Tilbake</button>
                    </Link>
                    <Link href='login'>
                        <button>Logg inn</button>
                    </Link>
                    
                </div>
                
            </LoginContainer>
        
    )
}

export default NewUser; 