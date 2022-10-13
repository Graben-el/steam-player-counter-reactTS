import { ITopGames } from "../../../interfaces/playerCounter"
import { useState, useEffect } from 'react'

export const TopGames: React.FC = () => {
    
    const [topGames, setTopGames] = useState<ITopGames[]>([])

    return(
        <>
            <h1>TopGAMES ROLANDO</h1>
        </>
    )
}