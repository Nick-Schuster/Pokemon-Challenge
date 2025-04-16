import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import EasterEgg from '../pages/EasterEgg'
import NotFound from '../pages/NotFound'

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/EasterEgg" element={<EasterEgg />} />
    </Routes>
)

