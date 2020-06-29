import React, { PureComponent } from 'react'
import { Container } from '@material-ui/core'

import SignInForm from '../../components/SignIn'

class AdminPage extends PureComponent {
  render() {
    return (
      <>
        <Container maxWidth="sm">
          <SignInForm />
        </Container>
      </>
    )
  }
}

export default AdminPage
