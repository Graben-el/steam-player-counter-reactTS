import { useState } from "react"
import styled from "styled-components"
import { IDetails, IRecord, ITopGames, ITrending } from "../../interfaces/playerCounter"
import { GameDetails } from "./gameDetails/GameDetails"
import { PlayerCounter } from "./playerCount/playerCounter"


export const ContentContainer: React.FC = () => {
    
// PlayerCount States
    const [trending, setTrending] = useState<ITrending[]>([])
    const [record, setRecord] = useState<IRecord[]>([])
    const [topGames, setTopGames] = useState<ITopGames[]>([])
    const [details, setDetails] = useState<IDetails>()

// GameDetails States
    const [gameDetail, setGameDetail] = useState


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