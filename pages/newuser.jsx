import LoginContainer from '../components/LoginContainer'
import Link from 'next/link'
import { firebaseInstance } from '../config/firebase'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const NewUser = () => {
  const router = useRouter()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await firebaseInstance.auth().createUserWithEmailAndPassword(email, password)
      console.log('Bruker laget')
      router.push('/login')
    } catch (error) {
      setError(error.message)
      console.log('error;', error)
    }
  }

  return (
    <LoginContainer onSubmit={handleSubmit}>
      <h1>Ny bruker</h1>
      <div>
        <label htmlFor="email">Epost</label>
        <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Passord</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div id="btn-container">
        <button type="submit">Fullfør</button>

        <Link href="login">
          <button>Logg inn</button>
        </Link>
        <Link href="/">
          <button>Tilbake</button>
        </Link>
      </div>

      {error && <p>{error}</p>}
    </LoginContainer>
  )
}

export default NewUser
