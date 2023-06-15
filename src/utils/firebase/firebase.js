import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyC-qiEaPE0NqatvVmjZJQnEZ-W270k-8TY',
    authDomain: 'crwn-clothing-db-17bc6.firebaseapp.com',
    projectId: 'crwn-clothing-db-17bc6',
    storageBucket: 'crwn-clothing-db-17bc6.appspot.com',
    messagingSenderId: '765873176067',
    appId: '1:765873176067:web:6af7d64b5b42558ad4d836',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = await doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch (err) {
            console.log('error creating the user', err.message);
        }
    }

    return userDocRef;
}