import { Container } from "../../../styles/playerCounter"


export const PlayerCounter: React.FC = () => {
    return(
        <Container>
            <ul className="menu">
                <li>
                    <a href="">Trending Now</a>
                </li>
                <li>
                    <a href="#">Top 10 now</a>
                </li>
                <li>
                    <a href="">Most Played Ever</a>
                </li>
            </ul>
            <div className="display">
                DISPLAY DOS RANKINGS
            </div>
        </Container>
    )
}
