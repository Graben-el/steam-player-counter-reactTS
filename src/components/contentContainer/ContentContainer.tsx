import { useState } from "react"
import styled from "styled-components"
import { IGameDetail, INews } from "../../interfaces/gameDetails"
import { IDetails } from "../../interfaces/playerCounter"
import { GameDetails } from "./gameDetails/GameDetails"
import { PlayerCounter } from "./playerCount/playerCounter"


export const ContentContainer: React.FC = () => {
    
// PlayerCount States
    const [details, setDetails] = useState<IDetails>()

// GameDetails States
    const [gameDetail, setGameDetail] = useState<IGameDetail>()
    const [news, setNews] = useState<INews>()

    return (
        <Container>
            <PlayerCounter />
            <GameDetails />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 83.8vh;
    justify-content: space-evenly;
    padding: 30px;
    gap: 30px;
`