import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { isEmpty } from "../../../helpers/helpers";
import { ITopGames } from "../../../interfaces/playerCounter";
import { List, ListItem, Loading } from "../../../styles/lists";

const options = {
    method: 'GET',
    url: 'https://steamcharts.p.rapidapi.com/api/v1/games/tops',
    headers: {
        'X-RapidAPI-Key': '74aa9a5909mshdddae3bd4159510p19d980jsnc4f75bfbf204',
        'X-RapidAPI-Host': 'steamcharts.p.rapidapi.com'
    }
};

export const TopGames: React.FC = () => {

    const [topGames, setTopGames] = useState<ITopGames[]>([])

    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setTopGames(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, []
    )

    return (
        <>{!isEmpty(topGames) ?
            <List>
                {
                    topGames.map(({ currentPlayers: online, hoursPlayed: hours, id, name, peakPlayers: peak, rank }, key) => {
                        return (
                            <ListItem key={key}>
                                <header>
                                    <div className="name">
                                        <h2>
                                            <span>{rank}. </span>
                                            {name}
                                        </h2>
                                    </div>
                                    <span> ID: {id}</span>
                                </header>
                                <div className="counter">
                                    <p>Online: {online.toLocaleString('pt-BR')}</p>
                                    <p>Peak: {peak.toLocaleString('pt-BR')}</p>
                                    <p>Hours Played: {hours.toLocaleString('pt-BR')}</p>
                                </div>
                            </ListItem>
                        )
                    })
                }
            </List >
            :
            <Loading>Carregando</Loading>
        }
        </>
    )
}


{/* <ListItem>
<header>
    <div className="name">
        <h2>
            <span>1. </span>
            Counter Strike
        </h2>
    </div>
    <span> ID: 154951</span>
</header>
<div className="counter">
    <p>Online: 256.236</p>
    <p>Peak: 500.000</p>
    <p>Hours Played: 7050h</p>
</div>
</ListItem> */}




