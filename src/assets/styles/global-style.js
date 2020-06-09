import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
    }

    body {
        padding: 0;
        margin: 0;
        background-position: center;
        height: auto;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        font-family: 'Lato', sans-serif;
    }
`

export default globalStyle
