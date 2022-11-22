import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { setFocus } from "../../../helpers/helpers"
import { IStyleObject } from "../../../interfaces/playerCounter"
import { CounterDisplay } from "../../../pages/playerCounters"
import { Container } from "../../../styles/playerCounter"

export const PlayerCounter: React.FC = () => {

    const pathName = window.location.pathname

    const [trendingStyle, setTrendingStyle] = useState<IStyleObject>()
    const [topGamesStyle, setTopGamesStyle] = useState<IStyleObject>()
    const [mostPlayedStyle, setMostPlayedStyle] = useState<IStyleObject>()

    const trending = setTrendingStyle
    const top = setTopGamesStyle
    const most = setMostPlayedStyle

    useEffect(() => {
        const page = pathName
        switch (page) {
            case '/trending':
                setFocus(trending, top, most)
                break;
            case '/top-games':
                setFocus(top, trending, most)
                break;
            case '/most-played':
                setFocus(most, top, trending)
                break;
        }
    }, [pathName])

    return (
        <Container>
            <ul className="menu">

                <li >
                    <Link
                        to="/trending"
                        style={trendingStyle}
                        onClick={() => window.location.pathname = '/trending'}
                    >Trending Now </Link>
                </li>
                <li >
                    <Link
                        to="/top-games"
                        style={topGamesStyle}
                        onClick={() => window.location.pathname = '/top-games'}
                    >Top 10 now</Link>
                </li>
                <li >
                    <Link
                        to="/most-played"
                        style={mostPlayedStyle}
                        onClick={() => window.location.pathname = '/most-played'}
                    >Most Played Ever</Link>
                </li>
            </ul>
            <div className="display-container">
                <div className="display">
                    <CounterDisplay />
                </div>
            </div>
        </Container>
    )
}
