import firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
    };

try {
    firebase.initializeApp(firebaseConfig);
} catch(error) {
        // /REGEX/
    if(!/already exists/.test(error.message)){
        console.error('Firebase error')
    }
}

const queryFirebase = (collection, filter) => {
    console.log(collection, filter)
    return firebase
        .firestore()
        .collection(collection)
        .where(...filter)
        .get()
}

export default queryFirebase;