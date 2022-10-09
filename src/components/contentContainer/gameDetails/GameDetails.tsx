import { Container, Description, Details, NewsContainer } from "../../../styles/gameDetails"


export const GameDetails: React.FC = () => {
    return (
        <Container>
            <div className="game-info">
                <div className="imagem">
                    <img src="#" alt="Imagem" />
                </div>
                <Details className="details">
                    <h2>Game Title</h2>
                    <div className="genres">
                        <a href="#">
                            <p>Genre 1</p>
                        </a>
                        <a href="#">
                            <p>Genre 2</p>
                        </a>
                        <a href="#">
                            <p>Genre 3</p>
                        </a>
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
        </Container>
    )
}