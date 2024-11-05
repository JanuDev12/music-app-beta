import "./main.css";
import reactLogo from "./assets/react.svg";
import FarmLogo from "./assets/logo.png";
import { Button } from "./components/ui/button";
import { EllipsisIcon, Github, MicVocalIcon, MonitorSpeakerIcon, Repeat, Search, Shuffle, Sparkle, Volume1 } from "lucide-react";
import { IconHeart, IconHomeFilled, IconMicrophone, IconPlayerPlayFilled, IconPlayerSkipBack, IconPlayerSkipBackFilled, IconPlayerSkipForward, IconPlayerSkipForwardFilled } from "@tabler/icons-react";
import { Slider } from "./components/ui/slider";
import IconPlaylists from "./components/icons/IconPlaylists";
import IconQueue from "./components/icons/IconQueue";
import { Separator } from "./components/ui/separator";

export function Main() {

  return (
    <>
      <div className="flex-grow w-full layout grid ">
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
        <div className="relativd">

        </div>
        <div className="player relative bottom-0 right-0 left-0  py-3 px-6 my-1.5 mr-1.5  rounded-lg flex items-center text-white justify-between">
          {/* Players Button  */}

          {/* BLUR */}
          {/*  <div className="absolute inset-0 backdrop-blur z-auto">
            
           </div> */}
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="icon" className="rounded-[50%]">
              <IconPlayerPlayFilled />
            </Button>
            <div className="flex gap-3">
              <IconPlayerSkipForwardFilled />
              <IconPlayerSkipBackFilled />
              <Shuffle />
              <Repeat />
            </div>

            {/* Slider */}
            <div className="w-80 flex items-center gap-3 text-xs">
              <span>1:32</span>
              <Slider defaultValue={[33]} max={100} step={1} />
              <span>4:52</span>
              <div>
                <Volume1 />
              </div>
            </div>

            {/* Card artist */}
            <div className="flex gap-3">
              <div className="size-9 bg-slate-400 rounded"></div>
              <div className="flex flex-col text-xs">
                <span className="text-sm">Song name</span>
                <span>Artist name</span>
              </div>
            </div>
          </div>

          {/* Buttons Songs */}
          <div className="flex items-center gap-5">
            <IconHeart />
            <IconPlaylists />
            <IconQueue />
            <MonitorSpeakerIcon />
            <EllipsisIcon />

            <Separator orientation="vertical" color="gray" className="h-10" />

            <MicVocalIcon />
          </div>
        </div>
      </div>
    </>
  );
}
