import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY
const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
const databaseURL = process.env.REACT_APP_FIREBASE_DATABASE_URL
const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
const appId = process.env.REACT_APP_FIREBASE_APP_ID

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
}

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig)

    this.auth = firebase.auth()
    this.database = firebase.database()

    this.userUid = null
  }

  setUserUid = (uid) => (this.userUid = uid)

  signWithEmail = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  createUserWithEmail = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  getUserCardsRef = () => this.database.ref(`/cards/${this.userUid}`)

  getUserCurrentCardRef = (id) =>
    this.database.ref(`/cards/${this.userUid}/${id}`)

  signOut = () => this.auth.signOut()
}

export default Firebase
