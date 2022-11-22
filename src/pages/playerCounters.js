import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { GameInfo } from '../components/contentContainer/gameDetails/GameInfo'
import { MostPlayed } from '../components/contentContainer/playerCount/MostPlayed'
import { TopGames } from '../components/contentContainer/playerCount/TopGames'
import { TrendingGames } from '../components/contentContainer/playerCount/TrendingGames'

export const CounterDisplay = () => (
    <Routes>
        <Route exact path='/steam-player-counter-reactTS' element={<TrendingGames />} />
        <Route exact path='/' element={<TrendingGames />} />
        <Route exact path='/trending' element={<TrendingGames />} />
        <Route exact path='/top-games' element={<TopGames />} />
        <Route exact path='/most-played' element={<MostPlayed />} />
    </Routes>
)
