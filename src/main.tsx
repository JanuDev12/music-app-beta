import "./main.css";
import reactLogo from "./assets/react.svg";
import FarmLogo from "./assets/logo.png";
import { Button } from "./components/ui/button";
import { Github, Search, Sparkle } from "lucide-react";
import { IconHomeFilled } from "@tabler/icons-react";

export function Main() {

  return (
    <>
      <div className="flex-grow w-full layout grid">
        <header className="flex gap-7 header p-3 text-white">
          <Button variant="outline" size="sm" className="flex gap-1">
            <Github />
            Source Code
          </Button>

          <div className="flex justify-between w-full">
            <nav className="flex gap-8">
              <div className="flex gap-2">
                <IconHomeFilled />
                Home
              </div>
              <div className="flex gap-2">
                <Sparkle />
                Discover
              </div>
              <div className="flex gap-2">
                <Search />
                Search
              </div>
            </nav>

            <div>Perfil</div>
          </div>
        </header>
        <aside className="sidebar w-36 p-5 text-white">
          <ul>
            <li>Mi library</li>
            <br />
            <li>Pins</li>
            <li>Playlists</li>
            <li>Liked Songs</li>
            <li>History</li>
            <li>Saves</li>
            <li>Artists</li>
            <li>Audiobooks</li>
            <li>Podcasts</li>
            <li>Albums</li>
            <li>Folders</li>
          </ul>
        </aside>

        <main className=" body bg-green-500 rounded-l rounded-bl">
          {/* Main Content */}
          APP
        </main>
        {/* Player */}
        <div className="player bottom-0 right-0 left-0 bg-red-500 p-3 my-1.5 mr-1.5  rounded-lg">
          Player
        </div>
      </div>
    </>
  );
}
