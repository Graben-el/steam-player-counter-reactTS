import { faSteam } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { LoadingContainer } from "../../styles/loading"

export const Loading: React.FC = () => {
    return (
        <LoadingContainer>
            <div className="circle"></div>
            <p>Carregando...</p>
        </LoadingContainer>
    )
}