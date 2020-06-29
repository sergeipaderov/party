import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

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
import AdminPage from './pages/Admin'

import './App.css'

function App() {
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
            <Route path="/admin" exact component={AdminPage} />
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
