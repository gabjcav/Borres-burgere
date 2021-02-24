import LoginContainer from '../components/LoginContainer';
import Link from 'next/link';
const Login = () => {

    console.log("Logget inn");

    return(
        
        
            <LoginContainer>
                <h1>Logg inn</h1>
                <div>
                    <input type="text" name="username" id="username"/>
                    <input type="password" name="password" id="password"/>
                </div>
                <div>
                    <button>Logg inn</button>
                    <Link href='/'>
                        <button>Tilbake</button>
                    </Link>
                    
                </div>
                
            </LoginContainer>
        
    )
}

export default Login;