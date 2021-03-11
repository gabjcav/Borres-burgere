import PageTitle from '../components/PageTitle'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <PageTitle>
        <span id="home-title">VELKOMMEN</span>
      </PageTitle>
      <Link href="/login">
        <button id="login-btn">Logg inn</button>
      </Link>
    </>
  )
}
