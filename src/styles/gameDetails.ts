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
`

export const Details = styled.div`
        display: flex;
        flex-direction: column;
        width: 60%;
        text-align: center;

        .genres {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 10px 0 30px;
        }

        .reviews {
            display: flex;
            justify-content: space-around;

            .rate-container {
                display: flex;
                flex-direction: column;
                gap: 12px;
                
                .rate {
                    border: 1px solid;
                    border-radius: 50%;
                    padding: 40px 30px;
                }
            }
            .likes-container > p {
                border: 1px solid;
                border-radius: 30px;
                padding: 0 10px;
                margin-top: 10px;
            }
        }
`

export const Description = styled.div`
    width: 100%;
    height: 100%;
`


export const NewsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`


