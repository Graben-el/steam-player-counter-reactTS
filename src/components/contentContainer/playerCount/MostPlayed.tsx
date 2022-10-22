import { useState, useEffect } from 'react'
import { IRecord } from '../../../interfaces/playerCounter'
import axios from 'axios'
import { List, ListItem} from '../../../styles/lists';
import { isEmpty } from '../../../helpers/helpers';
import { Loading } from '../../loading/Loading';

const options = {
    method: 'GET',
    url: 'https://steamcharts.p.rapidapi.com/api/v1/games/record',
    headers: {
        'X-RapidAPI-Key': '74aa9a5909mshdddae3bd4159510p19d980jsnc4f75bfbf204',
        'X-RapidAPI-Host': 'steamcharts.p.rapidapi.com'
    }
};

export const MostPlayed: React.FC = () => {
    const [record, setRecord] = useState<IRecord[]>([])

    useEffect(() => {
        axios.request(options).then(function (response) {
            setRecord(response.data);
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <>
            {!isEmpty(record) ?
                <List>
                    {
                        record.map(({ date, id, name, peakPlayers: peak }, key) => {
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
                                        <p>Peak: {peak.toLocaleString('pt-BR')}</p>
                                        <p>Record Set In: {date}</p>
                                    </div>
                                </ListItem>
                            )
                        })
                    }
                </List>
                :
                   <Loading />
            }
        </>
    )
}
