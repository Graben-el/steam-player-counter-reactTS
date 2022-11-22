import { useState, useEffect } from "react"
import styled from "styled-components"
import { fetchTrending } from "../../helpers/helpers"
import { IGameDetail, INews } from "../../interfaces/gameDetails"
import { IDetails } from "../../interfaces/playerCounter"
import { GameDetails } from "./gameDetails/GameDetails"
import { PlayerCounter } from "./playerCount/playerCounter"



export const ContentContainer: React.FC = (trending, setTrending) => {
    
// PlayerCount States
    const [details, setDetails] = useState<IDetails>()

// GameDetails States
    const [gameDetail, setGameDetail] = useState<IGameDetail>()
    const [news, setNews] = useState<INews>()


    // useEffect(() => {
    //     fetchTrending(setTrending)
    //     console.log(trending)
    // })
    return (
        <Container>
            <PlayerCounter/>
            <GameDetails />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    justify-content: space-evenly;
    padding: 20px;
    gap: 30px;
`