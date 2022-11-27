import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Description, Details, NewsContainer } from "../../../styles/gameDetails";
import axios from "axios";
import { IGameDetail } from '../../../interfaces/gameDetails'
import { isEmpty, isObjectEmpty } from "../../../helpers/helpers";
import { Loading } from "../../loading/Loading";
// , IPublisher, ITags, IAllReviews, IDlc



export const GameInfo: React.FC = () => {
    const [game, setGame] = useState<IGameDetail>()
    const [review, setReview] = useState<IGameDetail>()
    const [news, setNews] = useState<IGameDetail>()
    
    const { id } = useParams()
    
    const detailOptions = {
        method: 'GET',
        url: `https://steam2.p.rapidapi.com/appDetail/${id}`,
        headers: {
            'X-RapidAPI-Key': '74aa9a5909mshdddae3bd4159510p19d980jsnc4f75bfbf204',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };
    
    const reviewsOptions = {
        method: 'GET',
        url: `https://steam2.p.rapidapi.com/appReviews/${id}/limit/4`,
        headers: {
            'X-RapidAPI-Key': '74aa9a5909mshdddae3bd4159510p19d980jsnc4f75bfbf204',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };
    
    const newsOptions = {
        method: 'GET',
        url: `https://steam2.p.rapidapi.com/newsForApp/${id}/limit/4/300`,
        headers: {
            'X-RapidAPI-Key': '74aa9a5909mshdddae3bd4159510p19d980jsnc4f75bfbf204',
            'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
    };

    const fetchData: Function = (options: any, setter: Function): void => {
        axios.request(options).then(function ({ data }) {
            setter(data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        fetchData(detailOptions, setGame)
        fetchData(reviewsOptions, setReview)
        fetchData(newsOptions, setNews)
    }, [])

    return (
        <>
            {!isObjectEmpty(game) ?
                <>
                    <div className="game-info">
                        <div className="imagem">
                            <img src={game?.imgUrl} alt={game?.title} />
                        </div>
                        <Details className="details">
                            <h2>{game?.title}</h2>
                            <p className="release-date">Release Date: {game?.released}</p>
                            <div className="genres">
                                {game?.tags.map(({ name, url }, key) => {
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
                            <div className="genres">
                                <a href={game!.developer.link}>
                                    <p>Developer: {game!.developer.name}</p>
                                </a>
                                <a href={game!.publisher.link}>
                                    <p>Developer: {game!.publisher.name}</p>
                                </a>
                            </div>
                            <p>Price: {game!.price}</p>

                            <div className="reviews">
                                <div className="rate-container">
                                    <p className="rate">{game?.allReviews.ratingValue}</p>
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
                        <h3>DESCRIPTION</h3>
                        <p>{game!.description}</p>
                    </Description>

                    <NewsContainer className="news-updates">
                        <div className="news1">Noticia 1</div>
                        <div className="news2">Noticia 2</div>
                        <div className="news3">Noticia 3</div>
                    </NewsContainer>
                </> :
                <Loading />
            }</>
    );
};