import axios from 'axios';
import { useState, useEffect } from 'react'
import { createModuleResolutionCache } from 'typescript';
import { getStorage, isEmpty } from '../../../helpers/helpers'
import { ITrending } from '../../../interfaces/playerCounter'
import { List, ListItem } from '../../../styles/lists'
import { Loading } from '../../loading/Loading';

 // const [trending, setTrending] = useState<ITrending[]>([])
    // const [storage, setStorage] = useState([])

    // useEffect(() => {
    //     console.log('Fetch trending feito. Iniciando armazenamento')
    //     sessionStorage.setItem('trending', JSON.stringify(trending))
        
    //     const storageData = getStorage('trending')

    //     console.log('Armazenamento concluído. Recuperando dados...')
    //     setStorage(storageData)
    // }, [trending])

interface IProps {
    trending?: []
}


export const TrendingGames: React.FC = (trending: IProps) => {

    const trendingData = trending
    const [storage, setStorage] = useState([])

    // useEffect(() => {
    //     console.log('Fetch trending feito. Iniciando armazenamento')
    //     sessionStorage.setItem('trending', JSON.stringify(trendingData))
        
    //     const storageData = getStorage('trending')

    //     console.log('Armazenamento concluído. Recuperando dados...')
    //     setStorage(storageData)
    // }, [trendingData])

    return (
        <>
            {!isEmpty(storage) ?
                <>
                    <List>
                        {
                            storage.map(({ gain, id, name, currentPlayers: online }: any, key) => {
                                return (
                                    <ListItem key={key}>
                                        <header>
                                            <div className="name">
                                                <h2>
                                                    <span>{key + 1}. </span>
                                                    {name}
                                                </h2>
                                            </div>
                                            <span> ID: {id}</span>
                                        </header>
                                        <div className="counter">
                                            <p>Online Now: {online.toLocaleString('pt-BR')}</p>
                                            <p>Gain: {(gain / 10).toFixed(2)}%</p>
                                        </div>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </>
                :
                <Loading />

            }
        </>
    )
}