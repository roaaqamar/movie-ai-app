import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBWHm471B7_cRTz4TduzCahcsphXBRyqlI',
  authDomain: 'movie-ai-app-9adf6.firebaseapp.com',
  projectId: 'movie-ai-app-9adf6',
  storageBucket: 'movie-ai-app-9adf6.firebasestorage.app',
  messagingSenderId: '288731404932',
  appId: '1:288731404932:web:6c3c3bba35fe7c6e28c0d1',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

export default app