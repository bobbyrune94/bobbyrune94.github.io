import { Outlet } from 'react-router';

import Header from './components/Header';
import { useTheme } from './context/ThemeContext';

import "./App.css";

function App() {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen ${theme === "light" ? "bg-white border-black text-black" : "bg-black border-white text-white"}`}>
            <Header />
            <div className='min-h-screen'>
                <div className="max-w-4xl mx-auto flex flex-col pt-16 pb-16">
                    <Outlet />
                </div>

            </div>
        </div>
    );
}

export default App;