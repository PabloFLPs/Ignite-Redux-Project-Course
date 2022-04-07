import { createGlobalStyle } from "styled-components";

// orange: #ff7676
// green: #7fffd4

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }

    h2 {
        font-size: 2.4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: #333;
    }

    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1.2rem 0rem;
    }

    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
        padding-bottom: 0.6rem;
    }

    a {
        text-decoration: none;
        color: #333;
    }

    img {
        display: block;
    }

    input {
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`

export default GlobalStyles
