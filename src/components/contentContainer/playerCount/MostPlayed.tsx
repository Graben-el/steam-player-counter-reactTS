import { useState, useEffect } from 'react'
import { IRecord } from '../../../interfaces/playerCounter'

export const MostPlayed: React.FC = () => {
    const [record, setRecord] = useState<IRecord[]>([])
    return(
        <h1>Most Played</h1>
    )
}