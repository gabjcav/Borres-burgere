import LoginContainer from '../components/LoginContainer';
import Link from 'next/link';
const Login = () => {

    console.log("Logget inn");

    return(
        
        
            <LoginContainer>
                <h1>Logg inn</h1>
                <div>
                    <label htmlFor="username">Epost</label>
                    <input type="text" name="username" id="username"/>
                    <label htmlFor="password">Passord</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div id="btn-container">
                    <button>Logg inn</button>
                    <Link href='/'>
                        <button>Tilbake</button>
                    </Link>
                    
                </div>
                
            </LoginContainer>
        
    )
}

export default Login;