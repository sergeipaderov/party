import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import 'firebase/database'

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
import FirebaseContext from './context/firebaseContext'
import { PrivateRoute } from './utils/privateRoute'

import './App.css'

class App extends Component {
  componentDidMount() {
    const { auth, setUserUid } = this.context

    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUid(user.uid)
        localStorage.setItem('user', JSON.stringify(user.uid))
      } else {
        setUserUid(null)
        localStorage.removeItem('user')
      }
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

App.contextType = FirebaseContext

export default App
