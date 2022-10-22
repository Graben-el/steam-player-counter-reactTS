import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 40%;
    border-radius: 10px;
    font-size: 2rem;
    padding: 20px;

    .menu {
        display: flex;
        gap: 60px;
        margin-bottom: -10px;
        
        li {
            padding: 10px;
            padding-bottom: 20px;
        }
    }

    .display-container{
        background-color: var(--color-3);
        padding: 20px;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        border-radius: 10px;

        &::-webkit-scrollbar {
            width: 0;
        }
    }

    .display {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        overflow-y: scroll;
        background: transparent;

        &::-webkit-scrollbar {
            width: 0;
        }
    }
`

