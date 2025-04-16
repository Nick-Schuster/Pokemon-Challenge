import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EasterEgg from "./pages/EasterEgg";
import MainLayout from "./layouts/MainLayout";

const App: React.FC = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/easteregg" element={<EasterEgg />} />
            </Routes>
        </MainLayout>
    );
};

export default App;
