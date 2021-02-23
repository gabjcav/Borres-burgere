import LoginContainer from '../components/LoginContainer';
import MainContainer from '../components/MainContainer';
import NavBar from '../components/NavBar';

const Login = () => {

    console.log("Logget inn");

    return(
        
        
            <LoginContainer>
                <h1>Logg inn</h1>
                <div>
                    <input type="text" name="username" id="username"/>
                    <input type="password" name="password" id="password"/>
                </div>
                <button>Logg inn</button>
            </LoginContainer>
        
    )
}

export default Login;