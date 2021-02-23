import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
const Burgers = () => {
    return(
        <>
            <NavContainer>
                <NavBar />
            </NavContainer>
            <MainContainer>
                <h1>Burgers</h1>
            </MainContainer>
        </>
    )
}

export default Burgers;