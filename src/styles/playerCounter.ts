import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 40%;
    border: 2px solid blue;
    font-size: 2rem;
    padding: 20px;

    ul {
        display: flex;
        gap: 50px;
    }

    .display {
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 2px solid green;
        height: 100%;
        flex-wrap: wrap;
        overflow: scroll;
    }

    .trending {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
    }
`