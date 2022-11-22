import { Route, Routes } from "react-router-dom";
import { GameInfo } from "../components/contentContainer/gameDetails/GameInfo";

export const GameDisplay = () => (
    <Routes>
       <Route exact path='/detail/:id' element={<GameInfo />} />
    </Routes>
)
