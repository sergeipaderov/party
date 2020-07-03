import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from '@material-ui/core'

import useStyles from './style'

const SignInForm = () => {
  const classes = useStyles()

  const onClick = (event) => {
    event.preventDefault()
    console.log('onClick')
  }

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
            onClick={onClick}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default withRouter(SignInForm)
