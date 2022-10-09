import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    a, a:visited {
        color: black;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`

export const AppContainer = styled.main`
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`