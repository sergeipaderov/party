// const customTheme = {
//   primary: '#fff',
//   secondary: '#888f9b',
//   third: '#1F2633',
//   accent: '#92ccb2',
//   shadow: '#d1d1d1',
// }

// export default customTheme

import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: '#20c9e7',
    // },
    // secondary: {
    //   main: '#ff4e26',
    // },
    // background: {
    //   default: '#ebf2f3',
    // },
    primary: {
      main: '#92ccb2',
    },
    secondary: {
      main: '#888f9b',
    },
    color: {
      primary: '#fff',
      secondary: '#888f9b',
      third: '#1F2633',
      accent: '#92ccb2',
      shadow: '#d1d1d1',
    },
  },
})

export default theme
