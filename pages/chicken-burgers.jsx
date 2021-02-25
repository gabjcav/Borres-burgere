import NavBar from '../components/NavBar';
import NavContainer from '../components/NavBar';
import MainContainer from '../components/MainContainer';
import PageTitle from '../components/PageTitle';
const ChickenBurgers = () => {
    return(
        <>
            <NavContainer>
                <NavBar />
            </NavContainer>
            <MainContainer>
                <PageTitle>Kyllingburgere</PageTitle>
            </MainContainer>
        </>
    )
}

export default ChickenBurgers;