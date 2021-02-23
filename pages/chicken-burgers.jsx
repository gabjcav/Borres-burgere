import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
const ChickenBurgers = () => {
    return(
        <>
            <NavContainer>
                <NavBar />
            </NavContainer>
            <MainContainer>
                <h1>Chicken burgers</h1>
            </MainContainer>
        </>
    )
}

export default ChickenBurgers;