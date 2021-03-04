import React, { useEffect } from 'react';
import { firebaseInstance } from '../config/firebase';
import { useRouter } from 'next/router'; 
import { useAuth } from '../helper/context';
import ProfileContainer from '../components/ProfileContainer';

const Profile = () => {
    const router = useRouter();
    const userContext = useAuth();

    useEffect(() => {
        console.log("The context", userContext)
    }, [userContext])

    const handleSignout = async () => {

       await firebaseInstance.auth().signOut()
       router.push('/'); 
       console.log('logget ut'); 
    }

    

    return(
        <ProfileContainer>
            <p>Profil</p>
            {userContext && (
                <>
                    <p><span className="profile-span">Brukernavn:</span> {userContext.email}</p>
                    <p><span className="profile-span">Bruker-ID:</span> {userContext.uid}</p>
                </>
            )}
            <button onClick={handleSignout}>Logg ut</button>
        </ProfileContainer>
    )
}

export default Profile; 