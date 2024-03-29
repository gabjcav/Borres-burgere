import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

try {
  firebase.initializeApp(firebaseConfig)
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
} catch (error) {
  // /REGEX/
  if (!/already exists/.test(error.message)) {
    console.error('Firebase error')
  }
}
export const firebaseInstance = firebase

const queryFirebase = (collection, type) => {
  return firebaseInstance
    .firestore()
    .collection(collection)
    .where(...type)
    .get()
}

export default queryFirebase
