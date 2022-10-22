import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { CounterDisplay } from "../../../pages/playerCounters"
import { Container } from "../../../styles/playerCounter"

interface IStyleObject {
    background: string,
    color: string,
    padding?: string,
    paddingBottom?: string,
    borderRadius?: string
}

const focus= {
    background: '#1b2838',
    color: '#c7d5e0',
    padding: '10px',
    paddingBottom: '20px',
    borderRadius: '10px 10px 0 0'
}

const blur = {
    background: '#2a475e',
    color: '#66c0f4'
}


export const PlayerCounter: React.FC = () => {
    const [trendingStyle, setTrendingStyle] = useState<IStyleObject>()
    const [topGamesStyle, setTopGamesStyle] = useState<IStyleObject>()
    const [mostPlayedStyle, setMostPlayedStyle] = useState<IStyleObject>()

    const elementFocus: any = useRef()

    useEffect(()=> {
        elementFocus.current.focus()
    }, [])
    return (
        <Container>
            <ul className="menu">
                <li style={trendingStyle}>
                    <Link
                        to="/trending"  
                        ref={elementFocus}
                        onFocus={() => setTrendingStyle(focus)}
                        onBlur={() => setTrendingStyle(blur)}
                        >Trending Now</Link>
                </li>
                <li style={topGamesStyle}>
                    <Link
                        to="/top-games"
                        onFocus={() => setTopGamesStyle(focus)}
                        onBlur={() => setTopGamesStyle(blur)}
                        >Top 10 now</Link>
                </li>
                <li style={mostPlayedStyle}>
                    <Link
                        to="/most-played"
                        onFocus={() => setMostPlayedStyle(focus)}
                        onBlur={() => setMostPlayedStyle(blur)}
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
