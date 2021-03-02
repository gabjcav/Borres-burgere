import LoginContainer from '../components/LoginContainer';
import Link from 'next/link';
import firebase from 'firebase'; 
import queryFirebase from '../config/firebase';
const NewUser = () => {

    //parse formdata


    const createUser = (event) => { 
        event.preventDefault(); 
        console.log('EVENT', event);

        const data = new FormData(event.target);


        const email = data.get('email');
        const password = data.get('password');
      
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
                    <label htmlFor="email">Epost</label>
                    <input type="text" name="email" id="email"/>
                    <label htmlFor="password">Passord</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div id="btn-container">
                    <button type="submit">Fullfør</button>
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