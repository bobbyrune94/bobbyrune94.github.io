import { Link } from "react-router";

import profileURL from "../assets/jolteon-profile.png"
import { useTheme } from "../context/ThemeContext";


function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`flex justify-around border-b-4 py-4 ${theme === "light" ? "bg-white border-black" : "bg-black border-white"}`}>
      <a href="">
        <img src={profileURL} alt="Jolteon Logo" className="h-10 w-10 rounded-full" />
      </a>
      <div className="flex items-center gap-8">
        <ul className={`hidden md:flex items:center gap-6 ${theme === "light" ? "text-black" : "text-white"}`}>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/lego">Lego</Link>
          </li>
          <li>
            <Link to="/friend-codes">Friend Codes</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex item-center gap-2">
          <a href="https://www.instagram.com/kungfu.kenny98/" className="inline:flex items:center justify-center p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
          </a>
          <a href="https://www.twitch.tv/kungfu_kenny98" className="inline:flex items:center justify-center p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z"/></svg>
          </a>
          <div className="w-px bg-gray-400"></div>
          <button onClick={toggleTheme} className="inline:flex items:center justify-center hover:bg-gray-300 p-1 rounded">
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1"><path d="M12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4Z"/><path stroke-linecap="round" d="M12 3.5v2m8.5 6.5h-2m-13 0h-2m8.5 6.5v2m4.5-13L18 6M6 18l1.5-1.5M6 6l1.5 1.5m9 9L18 18"/></g></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A9 9 0 0 0 9 6a9 9 0 0 0 9 9a9 9 0 0 0 3.463-.69a.75.75 0 0 1 .981.98a10.5 10.5 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5c0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162" clip-rule="evenodd"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;