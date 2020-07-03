import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import * as firebase from 'firebase'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import DecorPage from './pages/Decor'
import SweetsPage from './pages/Sweets'
import FlowersPage from './pages/Flowers'
import PhotoPage from './pages/Photo'
import SouvenirsPage from './pages/Souvenirs'
import AnimatorsPage from './pages/Animators'
import OtherPage from './pages/Other'
import LoginPage from './pages/Login'

import './App.css'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

firebase.initializeApp(firebaseConfig)

const db = firebase.database()

class App extends Component {
  state = {
    productsList: [],
  }

  componentDidMount() {
    db.ref('/products/')
      .once('value')
      .then((res) => {
        this.setState({
          productsList: res.val(),
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Header />
          <main className="main">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/decor" exact component={DecorPage} />
              <Route path="/sweets" exact component={SweetsPage} />
              <Route path="/flowers" exact component={FlowersPage} />
              <Route path="/photo" exact component={PhotoPage} />
              <Route path="/souvenirs" exact component={SouvenirsPage} />
              <Route path="/animators" exact component={AnimatorsPage} />
              <Route path="/other" exact component={OtherPage} />
              <Route path="/login" exact component={LoginPage} />
              <Redirect to="/" />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
