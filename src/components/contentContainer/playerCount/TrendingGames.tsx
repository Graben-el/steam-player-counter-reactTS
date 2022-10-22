import axios from 'axios';
import { useState, useEffect } from 'react'
import { isEmpty } from '../../../helpers/helpers'
import { ITrending } from '../../../interfaces/playerCounter'
import { List, ListItem } from '../../../styles/lists'
import { Loading } from '../../../styles/playerCounter';

const options = {
    method: 'GET',
    url: 'https://steamcharts.p.rapidapi.com/api/v1/games/trending',
    headers: {
        'X-RapidAPI-Key': '74aa9a5909mshdddae3bd4159510p19d980jsnc4f75bfbf204',
        'X-RapidAPI-Host': 'steamcharts.p.rapidapi.com'
    }
};

export const TrendingGames: React.FC = () => {

    const [trending, setTrending] = useState<ITrending[]>([])

    // useEffect(() => {
    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //         setTrending(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }, [])

    return (
        <>
            {/* {!isEmpty(trending) ?
                <List>
                    {
                        trending.map(({ gain, id, name, currentPlayers: online }, key) => {
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
                                        <p>Gain: {gain}</p>
                                    </div>
                                </ListItem>
                            )
                        })
                    }

                    
                </List>
                :
                <Loading>Carregando</Loading>

            } */}
            <List>
                <ListItem>
                    <header>
                        <div className="name">
                            <h2>
                                <span>1°. </span>
                                Castlevania Symphony of the Night
                            </h2>
                        </div>
                        <span> ID: 123459</span>
                    </header>
                    <div className="counter">
                        <p>Online Now: 12354.4568</p>
                        <p>Gain: 899%</p>
                    </div>
                </ListItem>
                <ListItem>
                    <header>
                        <div className="name">
                            <h2>
                                <span>1°. </span>
                                Castlevania Symphony of the Night
                            </h2>
                        </div>
                        <span> ID: 123459</span>
                    </header>
                    <div className="counter">
                        <p>Online Now: 12354.4568</p>
                        <p>Gain: 899%</p>
                    </div>
                </ListItem>
                <ListItem>
                    <header>
                        <div className="name">
                            <h2>
                                <span>1°. </span>
                                Castlevania Symphony of the Night
                            </h2>
                        </div>
                        <span> ID: 123459</span>
                    </header>
                    <div className="counter">
                        <p>Online Now: 12354.4568</p>
                        <p>Gain: 899%</p>
                    </div>
                </ListItem>
                <ListItem>
                    <header>
                        <div className="name">
                            <h2>
                                <span>1°. </span>
                                Castlevania Symphony of the Night
                            </h2>
                        </div>
                        <span> ID: 123459</span>
                    </header>
                    <div className="counter">
                        <p>Online Now: 12354.4568</p>
                        <p>Gain: 899%</p>
                    </div>
                </ListItem>
                <ListItem>
                    <header>
                        <div className="name">
                            <h2>
                                <span>1°. </span>
                                Castlevania Symphony of the Night
                            </h2>
                        </div>
                        <span> ID: 123459</span>
                    </header>
                    <div className="counter">
                        <p>Online Now: 12354.4568</p>
                        <p>Gain: 899%</p>
                    </div>
                </ListItem>
                <ListItem>
                    <header>
                        <div className="name">
                            <h2>
                                <span>1°. </span>
                                Castlevania Symphony of the Night
                            </h2>
                        </div>
                        <span> ID: 123459</span>
                    </header>
                    <div className="counter">
                        <p>Online Now: 12354.4568</p>
                        <p>Gain: 899%</p>
                    </div>
                </ListItem>
                <ListItem>
                    <header>
                        <div className="name">
                            <h2>
                                <span>1°. </span>
                                Castlevania Symphony of the Night
                            </h2>
                        </div>
                        <span> ID: 123459</span>
                    </header>
                    <div className="counter">
                        <p>Online Now: 12354.4568</p>
                        <p>Gain: 899%</p>
                    </div>
                </ListItem>
                <ListItem>
                    <header>
                        <div className="name">
                            <h2>
                                <span>1°. </span>
                                Castlevania Symphony of the Night
                            </h2>
                        </div>
                        <span> ID: 123459</span>
                    </header>
                    <div className="counter">
                        <p>Online Now: 12354.4568</p>
                        <p>Gain: 899%</p>
                    </div>
                </ListItem>
                <ListItem>
                    <header>
                        <div className="name">
                            <h2>
                                <span>1°. </span>
                                Castlevania Symphony of the Night
                            </h2>
                        </div>
                        <span> ID: 123459</span>
                    </header>
                    <div className="counter">
                        <p>Online Now: 12354.4568</p>
                        <p>Gain: 899%</p>
                    </div>
                </ListItem>
            </List>
        </>
    )
}