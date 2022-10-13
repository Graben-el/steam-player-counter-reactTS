import { Link } from "react-router-dom"
import { CounterDisplay } from "../../../pages/playerCounters"
import { Container } from "../../../styles/playerCounter"
import { TrendingGames } from "./TrendingGames"


export const PlayerCounter: React.FC = () => {
    return(
        <Container>
            <ul className="menu">
                <li>
                    <Link to="/trending">Trending Now</Link>
                </li>
                <li>
                    <Link to="/top-games">Top 10 now</Link>
                </li>
                <li>
                    <Link to="/most-played">Most Played Ever</Link>
                </li>
            </ul>
            <div className="display">
                <CounterDisplay />
            </div>
        </Container>
    )
}
