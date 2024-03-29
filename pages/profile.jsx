import React, { useEffect } from 'react'
import { firebaseInstance } from '../config/firebase'
import { useRouter } from 'next/router'
import { useAuth } from '../helper/context'
import ProfileContainer from '../components/ProfileContainer'

const Profile = () => {
  const router = useRouter()
  const userContext = useAuth()
  const { user, loading, isAuthenticated } = useAuth()

  const handleSignout = async () => {
    await firebaseInstance.auth().signOut()
    router.push('/')
  }

  return (
    <ProfileContainer>
      <p>Profil</p>
      <div className="line"></div>
      {user && (
        <>
          <p>
            <span className="profile-span">Brukernavn:</span> {user.email}
          </p>
          <p>
            <span className="profile-span">Bruker-ID:</span> {user.uid}
          </p>
        </>
      )}
      <div className="line" id="bottom-line"></div>
      <button onClick={handleSignout}>Logg ut</button>
    </ProfileContainer>
  )
}

export default Profile
