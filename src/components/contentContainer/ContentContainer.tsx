import styled from "styled-components"
import { GameDetails } from "./gameDetails/GameDetails"
import { PlayerCounter } from "./playerCount/playerCounter"


export const ContentContainer: React.FC = () => {
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