import React from 'react'
import { NavLink, withRouter, useHistory } from 'react-router-dom'

import {
  Box,
  // Link,
  InputLabel,
  Input,
  FormHelperText,
  FormControl,
  InputAdornment,
  IconButton,
  // Button,
} from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import CustomButton from '../CustomButton'
import theme from '../../assets/styles/theme'

class SignInForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      email: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
      showPasswordSymbols: false,
      loading: false,
      showResponseError: false,
      errorMessage: '',
    }
  }

  tyk = () => {
    const { history } = this.props

    history.push('/')
  }

  onNextClick = () => {
    const { email, password } = this.state
    let hasError = false

    if (!email.value) {
      this.setState({
        email: { ...email, error: `Email can't be empty` },
      })
      hasError = true
    }

    if (!password.value) {
      this.setState({
        password: { ...password, error: `Password can't be empty` },
      })
      hasError = true
    }

    if (hasError) return
    const sendingObject = {
      email: email.value,
      password: password.value,
    }

    // this.setState({ loading: true }, () => {
    //   this.props.createSession(sendingObject).then(() => {
    //     if (this.props.session && this.props.session.createdSession) {
    //       this.setState({ loading: false }, () => {
    //         if (
    //           this.props.session.createdSession.userable &&
    //           this.props.session.createdSession.userable.selected_agency
    //         ) {
    //           this.props.history.push('/')
    //         } else {
    //           this.props.history.push(
    //             `/user/${this.props.session.createdSession.userable.id}`
    //           )
    //         }
    //       })
    //     } else {
    //       this.setState({
    //         showResponseError: true,
    //         errorMessage: this.props.session.createdSessionError,
    //         loading: false,
    //       })
    //     }
    //   })
    // })
  }

  onSnackbarClose = () => {
    this.setState({ showResponseError: false }, () => {
      this.setState({ errorMessage: '' })
    })
  }

  render() {
    // const { classes } = this.props
    const {
      email,
      password,
      showPasswordSymbols,
      showResponseError,
      errorMessage,
      loading,
    } = this.state
    return (
      <>
        {/* <ErrorSnackbar
          isOpen={showResponseError}
          message={errorMessage}
          onSnackbarClose={this.onSnackbarClose}
        />
        <LogoSign /> */}
        {/* <Box className={classes.formContainer}> */}
        <Box>
          {/* <Box mb={10}>
            <Box mb={10}>
              <TabsSign value={1} />
            </Box>
          </Box> */}
          <FormControl fullWidth margin="dense" error={!!email.error}>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <Input
              id="email"
              value={email.value}
              onChange={(event) =>
                this.setState({
                  email: {
                    ...email,
                    value: event.target.value.toLowerCase(),
                    error: '',
                  },
                })
              }
            />
            {!!email.error && <FormHelperText>{email.error}</FormHelperText>}
          </FormControl>
          <FormControl fullWidth margin="dense" error={!!password.error}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              focused="color: #fff"
              id="password"
              type={showPasswordSymbols ? 'text' : 'password'}
              value={password.value}
              onChange={(event) =>
                this.setState({
                  password: {
                    ...password,
                    value: event.target.value,
                    error: '',
                  },
                })
              }
              endAdornment={
                <InputAdornment>
                  <IconButton
                    onClick={() =>
                      this.setState({
                        showPasswordSymbols: !showPasswordSymbols,
                      })
                    }
                  >
                    {showPasswordSymbols ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {!!password.error && (
              <FormHelperText>{password.error}</FormHelperText>
            )}
          </FormControl>
          {/* <Link href="/forgotpassword" className={classes.linkHelpSigningIn}> */}
          {/* <Link>Forgot your login details? Get help signing in.</Link> */}
          <Box pt={4} pb={5}>
            <CustomButton
              color={theme.accent}
              text="Log In"
              disabled={loading}
              // onClick={this.onNextClick}
              onClick={this.tyk}
            />
          </Box>
        </Box>
      </>
    )
  }
}

// const mapStateToProps = (state) => {
//   return { session: state.sessions }
// }

// export default connect(mapStateToProps, { createSession })(
//   withRouter(withStyles(styles)(SignIn))
// )

export default withRouter(SignInForm)
