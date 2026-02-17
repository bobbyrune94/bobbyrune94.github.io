import { Link } from "react-router";

import profileUrl from '../assets/self-profile-picture.jpeg';
import AboutCard from "../components/AboutCard";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
                <div className="flex flex-row items-center gap-8">
                    <img src={profileUrl} alt="Profile" className="rounded-full w-40 h-40 mb-4" />
                    <div className="flex flex-col gap-4">
                        <p className="">Welcome to my website!</p>
                        <h1 className="text-4xl font-bold">Kenny aka Kungfu_Kenny98</h1>
                        <p className="text-xl text-red-500">Software Engineer | Amateur Streamer | Lego Affiliate</p>
                    </div>
                </div>
                <div className="flex flex-col text-lg">
                    <p>By day, I'm a software engineer building web-based and AI-assisted tools for my company.</p>
                    <p>By night, I'm a gamer and amateur streamer who shares my love of games, Legos, and martial arts with my community.</p>
                </div>
                <div className="flex flex-row gap-4">
                    <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-red-500">
                        Check Out My Projects
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/></svg>
                    </Link>
                    <Link to="https://www.twitch.tv/kungfu_kenny98" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-red-500">
                        Watch Me Stream
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/></svg>
                    </Link>
                </div>
            </div>
            <div className="border-t border-gray-300 pt-8 pb-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <AboutCard 
                        title="Software Engineer"
                        description="I build web-based and AI-assisted tools for my company."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M92.8 145.6a8 8 0 1 1-9.6 12.8l-32-24a8 8 0 0 1 0-12.8l32-24a8 8 0 0 1 9.6 12.8L69.33 128Zm58.89-71.4l-32 112a8 8 0 1 1-15.38-4.4l32-112a8 8 0 0 1 15.38 4.4m53.11 60.2l-32 24a8 8 0 0 1-9.6-12.8l23.47-17.6l-23.47-17.6a8 8 0 1 1 9.6-12.8l32 24a8 8 0 0 1 0 12.8"/></svg>}
                    />
                    <AboutCard 
                        title="Gamer"
                        description="I play a variety of games in my free time, primarily Pokemon and Zelda titles."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="currentColor" d="M7.51 26a5.5 5.5 0 0 1-1.44-.19A5.6 5.6 0 0 1 2.19 19l2.33-8.84a5.54 5.54 0 0 1 2.59-3.43a5.43 5.43 0 0 1 4.15-.54A5.52 5.52 0 0 1 14.7 9h2.6a5.5 5.5 0 0 1 3.44-2.81a5.43 5.43 0 0 1 4.15.54a5.57 5.57 0 0 1 2.59 3.41L29.81 19a5.6 5.6 0 0 1-3.89 6.83a5.43 5.43 0 0 1-4.15-.54a5.54 5.54 0 0 1-2.59-3.41L19 21h-6l-.23.86a5.54 5.54 0 0 1-2.59 3.41a5.46 5.46 0 0 1-2.67.73M9.83 8a3.5 3.5 0 0 0-1.72.46a3.6 3.6 0 0 0-1.66 2.19l-2.33 8.84a3.6 3.6 0 0 0 2.48 4.39a3.43 3.43 0 0 0 2.62-.34a3.54 3.54 0 0 0 1.66-2.19L11.5 19h9l.61 2.35a3.58 3.58 0 0 0 1.66 2.19a3.46 3.46 0 0 0 2.63.34a3.58 3.58 0 0 0 2.47-4.39l-2.33-8.84a3.55 3.55 0 0 0-1.65-2.19a3.46 3.46 0 0 0-2.63-.34a3.55 3.55 0 0 0-2.37 2.22l-.24.66h-5.3l-.24-.66a3.56 3.56 0 0 0-2.38-2.22a3.5 3.5 0 0 0-.9-.12"/><path fill="currentColor" d="M10 16a2 2 0 1 1 2-2a2 2 0 0 1-2 2m0-2"/><circle cx="22" cy="12" r="1" fill="currentColor"/><circle cx="22" cy="16" r="1" fill="currentColor"/><circle cx="20" cy="14" r="1" fill="currentColor"/><circle cx="24" cy="14" r="1" fill="currentColor"/></svg>}
                    />
                    <AboutCard 
                        title="Amateur Streamer"
                        description="I stream my gaming sessions and share my passion for Legos and martial arts on Twitch."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11z"/></svg>}
                    />
                    <AboutCard 
                        title="Athlete"
                        description="I trained in Chinese martial arts for more than 10 years. Now I'm playing volleyball with my friends in a local league."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M57.592 16.545c-8.657.067-22.155 4.26-29.053 15.084c-4.284 6.724-5.297 14.397-4.742 21.459c1.11 14.124 7.61 26.712 14.314 34.482c63.365 73.435 131.837 144.758 204.698 213.62c-7.998 7.462-15.994 14.925-24.096 22.328l-35.598-32.133a135 135 0 0 0 5.051-11.596l-20.602-1.879C153.701 314.468 124.807 345.464 80 368l1.23 20.02a256 256 0 0 0 17.454-9.66l17.441 34.769c-25.25 21.202-63.434 50.785-89.564 71.371l23.77 5.557c29.94-23.589 59.263-47.63 88.08-72.008l-24.565-49.61c24.393-17.178 45.548-38.322 60.174-61.013l44.92 40.336A3127 3127 0 0 0 256 313.664a3127 3127 0 0 0 37.06 34.098l44.92-40.336c14.626 22.691 35.78 43.835 60.174 61.013l-24.564 49.61c28.816 24.378 58.138 48.42 88.08 72.008l23.77-5.557c-26.131-20.586-64.316-50.168-89.565-71.371l17.441-34.77a256 256 0 0 0 17.454 9.66L432 368c-44.807-22.536-73.7-53.532-87.564-90.09l-20.602 1.88a135 135 0 0 0 5.05 11.595l-35.597 32.133c-8.102-7.403-16.098-14.866-24.096-22.329C342.052 232.33 410.524 161.005 473.89 87.57c6.704-7.77 13.204-20.358 14.314-34.482c.555-7.062-.458-14.735-4.742-21.46c-6.898-10.824-20.396-15.016-29.053-15.083c-16.903-.132-36.847 15.177-40.178 19.053c-15.592 18.148-34.449 14.71-51.834 13.449c12.706 8.842 24.54 12.333 35.17 11.646s19.323-5.289 26.57-10.066c10.249-6.23 20.535-18.3 33.716-15.64c25.822 6.251 4.255 38.683 2.408 40.824C397.083 149.027 328.747 220.15 256 288.83C183.253 220.15 114.917 149.026 51.74 75.81c-1.847-2.141-23.414-34.573 2.408-40.825c13.18-2.66 23.467 9.412 33.715 15.641c7.248 4.777 15.94 9.38 26.57 10.066c10.63.687 22.465-2.804 35.17-11.646c-17.384 1.26-36.241 4.7-51.833-13.45c-3.33-3.875-23.275-19.184-40.178-19.052zM191.965 347.75c-15.63 13.954-31.506 27.755-47.498 41.482l8.097 16.743c17.823-15.254 35.506-30.598 52.883-46.133zm128.07 0l-13.482 12.092c17.377 15.535 35.06 30.88 52.883 46.133l8.097-16.743c-15.992-13.727-31.869-27.528-47.498-41.482"/></svg>}
                    />
                    <AboutCard 
                        title="World Traveler"
                        description="I've traveled to more than 10 countries across 4 continents and hope to visit many more in the future."
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"/></svg>}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;