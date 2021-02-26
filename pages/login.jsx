import LoginContainer from '../components/LoginContainer';
import Link from 'next/link';
import firebase from 'firebase'; 
const Login = () => {

    

    const loginUser = () => { 
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
     // Signed in
        let user = userCredential.user;
    // ...
        console.log(user)
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
        });
    }

    return(
            <LoginContainer onSubmit={loginUser}>
                <h1>Logg inn</h1>
                <div>
                    <label htmlFor="username">Epost</label>
                    <input type="text" name="username" id="username"/>
                    <label htmlFor="password">Passord</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div id="btn-container">
                    <button onClick={loginUser}>Logg inn</button>
                    <Link href='/'>
                        <button>Tilbake</button>
                    </Link>
                    <Link href='/newuser'>
                        <button>Ny bruker</button>
                    </Link>
                    
                </div>
                
            </LoginContainer>
        
    )
}

export default Login;