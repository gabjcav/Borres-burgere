import '../styles/globals.css' 
import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import { LoginContext, UsernameContext, CartContext } from '../helper/context'; 
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [cart, setCart] = useState([]);
  
  return (
<>
     <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {/* <CartContext value={{cart, setCart}}> */}
        <UsernameContext.Provider value={{username, setUsername}}> 
            <NavContainer>
                  <NavBar />
            </NavContainer>
            <MainContainer>
              <Component {...pageProps} />
            </MainContainer>
         </UsernameContext.Provider>
      {/* </CartContext> */}
    </LoginContext.Provider> 
</>
  )
}

export default MyApp
