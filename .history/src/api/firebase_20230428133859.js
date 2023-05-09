import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCUJ_fUwvLEeNGfFOsW8KZEWpVlEGe1gpQ",
    authDomain: "travel-app-904b6.firebaseapp.com",
    databaseURL: "https://travel-app-904b6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "travel-app-904b6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",    
});

export async function login() {
    return signInWithPopup(auth, provider)
    .then((result) => {
    const user = result.user;
    console.log(user);
    return user;
    })
    .catch(console.error);
}

export async function logout() {
    return signOut(auth).then(() => null);
}

export function onUserStateChange(callback) {
    onAuthStateChanged(auth, (user) => {
    callback(user);
});
}
