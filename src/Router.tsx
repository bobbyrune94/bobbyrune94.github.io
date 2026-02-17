import { Routes, Route } from 'react-router'

import App from './App'
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import FriendCodePage from './pages/FriendCodePage';
import GamesPage from './pages/GamesPage';
import InDevelopmentPage from './components/InDevelopmentPage';

const Router = () => {
    return (
        <Routes>
            <Route element={<App />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/lego" element={<InDevelopmentPage />} />
                <Route path="/friend-codes" element={<FriendCodePage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/contact" element={<InDevelopmentPage />} />
            </Route>
        </Routes>
    )
}

export default Router;