import { Routes, Route } from 'react-router'

import App from './App'
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import FriendCodePage from './pages/FriendCodePage';
import GamesPage from './pages/GamesPage';
import LegoPage from './pages/LegoAffiliatePage';
import InDevelopmentPage from './components/InDevelopmentPage';

const Router = () => {
    return (
        <Routes>
            <Route element={<App />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/lego" element={<LegoPage />} />
                <Route path="/friend-codes" element={<FriendCodePage />} />
                <Route path="/games" element={<GamesPage />} />
            </Route>
        </Routes>
    )
}

export default Router;