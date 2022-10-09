import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    border: 2px solid red;
    width: 60%;
    padding: 30px;
    font-size: 1.7rem;
    
    .details,
    .description,
    .news-updates {
        padding: 20px;
        border: 1px solid;
    }

    .game-info{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    
    .imagem {
        height: 300px;
        width: 250px;
        border: 1px solid;
    }

    .details {
        display: flex;
        flex-direction: column;
        width: 60%;
        text-align: center;
        gap: 20px;

        .genres {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .reviews {
            display: flex;
            justify-content: space-around;
        }
    }

    .description {
        width: 100%;
        height: 100%;
    }

    .news-updates {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`