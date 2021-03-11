import PageTitle from '../components/PageTitle'
import Link from 'next/link'
import { useAuth } from '../helper/context'
import HomeContainer from '../components/HomeContainer'
export default function Home() {
  const { user, loading, isAuthenticated } = useAuth()
  return (
    <HomeContainer>
      <PageTitle>
        <span id="home-title">VELKOMMEN</span>
      </PageTitle>
      {isAuthenticated && <h2>{user.email}</h2>}
      {!isAuthenticated && (
        <Link href="/login">
          <button id="login-btn">Logg inn</button>
        </Link>
      )}
    </HomeContainer>
  )
}
