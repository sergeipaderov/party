import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from '@material-ui/core'

import useStyles from './style'
import FirebaseContext from '../../context/firebaseContext'

const SignInForm = () => {
  const classes = useStyles()
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [helperText, setHelperText] = useState('')
  const [error, setError] = useState(false)
  const { setUserUid, signWithEmail } = useContext(FirebaseContext)

  useEffect(() => {
    if (email.trim() && password.trim()) {
      setIsButtonDisabled(false)
    } else {
      setIsButtonDisabled(true)
    }
  }, [email, password])

  const onClick = (e) => {
    e.preventDefault()

    signWithEmail(email, password)
      .then((res) => {
        setUserUid(res.user.uid)
        localStorage.setItem('user', res.user.uid)
        history.push('/')
      })
      .catch((err) => {
        setError(true)
        setHelperText('Incorrect username or password')
      })
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || onClick(e)
    }
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
            error={error}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <TextField
            error={error}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e)}
            helperText={helperText}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            className={classes.submit}
            onClick={onClick}
            disabled={isButtonDisabled}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default SignInForm
