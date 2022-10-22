import styled, { createGlobalStyle } from "styled-components"
import './variables.css'

export const GlobalStyle = createGlobalStyle`
    

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        &:focus {
            outline: none;
        }
    }

    html {
        font-size: 62.5%;
    }

    main{
        background-color: var(--color-4);
    }

    a, a:visited {
        color: var(--color-2);
        text-decoration: none;

        &:hover {
            color: var(--color-5)
        }
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