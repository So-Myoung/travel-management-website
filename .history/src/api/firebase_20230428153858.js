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

export async function addNewProduct(product, image) {
    const id = uuid();
    return set(ref(database, `products/${id}`), {
      ...product,
      id,
      price: parseInt(product.price),
      image,
      options: product.options.split(','),
    });
  }
  
  export async function getProducts() {
    return get(ref(database, 'products')).then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return [];
    });
  }
  
  export async function getCart(userId) {
    return get(ref(database, `carts/${userId}`)) //
      .then((snapshot) => {
        const items = snapshot.val() || {};
        return Object.values(items);
      });
  }
  
  export async function addOrUpdateToCart(userId, product) {
    return set(ref(database, `carts/${userId}/${product.id}`), product);
  }
  
  export async function removeFromCart(userId, productId) {
    return remove(ref(database, `carts/${userId}/${productId}`));
  }
  