import "./main.css";
import reactLogo from "./assets/react.svg";
import FarmLogo from "./assets/logo.png";
import { Button } from "./components/ui/button";
import { BookHeadphonesIcon, BookmarkIcon, DiscAlbumIcon, EllipsisIcon, Folder, Github, HeartIcon, History, LibraryBigIcon, MicVocalIcon, MonitorSpeakerIcon, Repeat, Search, Settings, Shuffle, Sparkle, Volume1 } from "lucide-react";
import { IconHeart, IconHomeFilled, IconLibraryMinus, IconMicrophone, IconPin, IconPlayerPlayFilled, IconPlayerSkipBack, IconPlayerSkipBackFilled, IconPlayerSkipForward, IconPlayerSkipForwardFilled, IconUserHeart } from "@tabler/icons-react";
import { Slider } from "./components/ui/slider";
import IconPlaylists from "./components/icons/IconPlaylists";
import IconQueue from "./components/icons/IconQueue";
import { Separator } from "./components/ui/separator";
import IconLibrary from "./components/icons/IconLibrary";
import IconLibrary2 from "./components/icons/IconLibrary2";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { useEffect } from "react";
import { tracks } from "./data/tracks";
import AudioPlayer from "./components/AudioPlayer";

export function Main() {

  const audioSrc = tracks[0].src;

 

  return (
    <>
      <div className="flex-grow w-full layout grid ">
        <header className="flex gap-20 header p-3 text-white">
          <Button variant="outline" size="sm" className="flex gap-1">
            <Github />
            Source Code
          </Button>

          <div className="flex justify-between items-center w-full">
            <nav className="flex gap-8">
              <div className="flex gap-4">
                <IconHomeFilled />
                Home
              </div>
              <div className="flex gap-4">
                <Sparkle />
                Discover
              </div>
              <div className="flex gap-4">
                <Search />
                Search
              </div>
            </nav>

            {/* Icon Users */}
            <div className="flex items-center gap-4 mr-4">
              <Settings />
              <Avatar className="rounded-lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <aside className="sidebar w-52 px-5 text-white">
          {/* SIDEBAR HEADER */}
          <div className="flex gap-3 mt-4 mb-4">
            <IconLibrary />
            <span>Mi library</span>
          </div>

          <Separator className="rounded h-[1.1px]" />
          {/* SIDEBAR CONTENT */}
          <ul className="mt-4 flex flex-col gap-6">
            <li className="flex gap-3">
              <IconPin />
              Pins
            </li>
            <li className="flex gap-3">
              <BookHeadphonesIcon />
              Playlists
            </li>
            <li className="flex gap-3">
              <HeartIcon />
              Liked Songs
            </li>
            <li className="flex gap-3">
              <History />
              History
            </li>
            <li className="flex gap-3">
              <BookmarkIcon />
              Saves
            </li>
            <li className="flex gap-3">
              <IconUserHeart />
              Artists
            </li>
            {/* <li>Audiobooks</li>
            <li>Podcasts</li> */}
            <li className="flex gap-3">
              <DiscAlbumIcon />
              Albums
            </li>
            <li className="flex gap-3">
              <Folder />
              Folders
            </li>
          </ul>
        </aside>

        <main className=" body text-white bg-[#060606] rounded-l-md rounded-bl-md border border-[#202020] p-5">
          {/* Main Content */}
          MAIN CONTENT
        </main>
        
        {/* Player */}
        <AudioPlayer tracks={tracks}/>
       
      </div>
    </>
  );
}
