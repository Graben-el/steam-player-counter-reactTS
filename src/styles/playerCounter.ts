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
        margin-left: 10px;
        margin-bottom: -10px;
        
        li {
            padding: 10px 0 20px 0;
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

export const focus= {
    background: '#1b2838',
    color: '#c7d5e0',
    padding: '10px',
    paddingBottom: '20px',
    borderRadius: '10px 10px 0 0'
}

export const blur = {
    background: '#2a475e',
    color: '#66c0f4'
}