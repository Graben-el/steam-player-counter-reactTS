import axios from "axios";
import React, { useEffect, useState } from "react";
import { ITrending } from "../../../interfaces/playerCounter";

const options = {
    method: 'GET',
    url: 'https://steamcharts.p.rapidapi.com/api/v1/games/tops',
    headers: {
        'X-RapidAPI-Key': '74aa9a5909mshdddae3bd4159510p19d980jsnc4f75bfbf204',
        'X-RapidAPI-Host': 'steamcharts.p.rapidapi.com'
    }
};

export const TrendingGames: React.FC = () => {

    const [trending, setTrending] = useState<ITrending[]>([])

    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setTrending(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, []
    )

    return (
        <ul

            style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap"
            }
            }>
            {
                trending.map(({ currentPlayers: online, hoursPlayed: hours, id, name, peakPlayers: peak, rank }, key) => {
                    return (
                        <li key={key}>
                            <div>
                                <h2><span style={{ color: 'red' }}>{rank}</span> {name} <span style={{ fontSize: '10px' }}>{id}</span></h2>
                                <p>Players:</p>
                                <p>Online: {online}</p>
                                <p>Peak: {peak}</p>
                                <p>Hours Played: {hours}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul >
    )
}