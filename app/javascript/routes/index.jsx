import React from 'react';
import HomePage from '../components/HomePage';
import GameBoard from '../components/GameBoard';
import Ranking from '../components/Ranking';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default (
    <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gameboard" element={<GameBoard />} />
        <Route path="/ranking" element={<Ranking />} />
        </Routes>
    </Router>
);