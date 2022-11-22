import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Description, Details, NewsContainer } from "../../../styles/gameDetails";
import axios from "axios";
import { IGameDetail } from '../../../interfaces/gameDetails'
// , IPublisher, ITags, IAllReviews, IDlc






export const GameInfo: React.FC = () => {
    const [game, setGame] = useState<IGameDetail>()

    const { id } = useParams()

    const options = {
        method: 'GET',
        url: `https://steam2.p.rapidapi.com/appDetail/${id}`,
        headers: {
            'X-RapidAPI-Key': '74aa9a5909mshdddae3bd4159510p19d980jsnc4f75bfbf204',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then(function ({ data }) {
            console.log(data);
            setGame(data)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    return (
        <>
            <div className="game-info">
                <div className="imagem">
                    <img src={game!.imgUrl} alt={game!.title} />
                </div>
                <Details className="details">
                    <h2>{game!.title}</h2>
                    <p className="release-date">Release Date: {game!.released}</p>
                    <div className="genres">
                        {game!.tags.map(({ name, url }, key) => {
                            if (key <= 4) {
                                return (
                                    <a href={url} key={key}>
                                        <p>{name}</p>
                                    </a>
                                )
                            }
                        })
                        }
                    </div>

                    <div className="reviews">
                        <div className="rate-container">
                            <p className="rate">RATE</p>
                            <p className="review-desc">review desc</p>
                        </div>
                        <div className="likes-container">
                            <p className="like">Like</p>
                            <p className="dislike">Dislike</p>
                            <p className="review">Reviews</p>
                        </div>
                    </div>
                </Details>
            </div>
            <Description className="description">
                DESCRIPTION
            </Description>
            <NewsContainer className="news-updates">
                <div className="news1">Noticia 1</div>
                <div className="news2">Noticia 2</div>
                <div className="news3">Noticia 3</div>
            </NewsContainer>
        </>
    );
};

