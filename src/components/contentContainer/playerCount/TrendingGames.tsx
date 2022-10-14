import { useState, useEffect } from 'react'
import { ITrending } from '../../../interfaces/playerCounter'

export const TrendingGames: React.FC = () => {
    const [trending, setTrending] = useState<ITrending[]>([])
    return(
        <h1>TRENDING</h1>
    )
}