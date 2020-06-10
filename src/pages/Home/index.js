import React, { Component } from 'react'

import CardList from '../../components/CardList'

class HomePage extends Component {
  render() {
    return (
      <>
        <h1 style={{ color: '#888f9b' }}>Home Page</h1>
        <CardList />
      </>
    )
  }
}

export default HomePage
