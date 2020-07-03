import React, { PureComponent } from 'react'
// import Reveal from 'react-reveal/Reveal'

import CardList from '../../components/CardList'

class DecorPage extends PureComponent {
  render() {
    return (
      <>
        {/* <section style={{ width: '100%' }}>
          <Reveal effect="fadeInUp"> */}
        <CardList />
        {/* </Reveal>
        </section> */}
      </>
    )
  }
}

export default DecorPage
