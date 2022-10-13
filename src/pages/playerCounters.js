import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MostPlayed } from '../components/contentContainer/playerCount/MostPlayed'
import { TopGames } from '../components/contentContainer/playerCount/TopGames'
import { TrendingGames } from '../components/contentContainer/playerCount/TrendingGames'

export const CounterDisplay = () => (
    <Routes>
        <Route exact path='/trending' element={<TrendingGames />} />
        <Route exact path='/top-games' element={<TopGames />} />
        <Route exact path='/most-played' element={<MostPlayed />} />
    </Routes>
)
