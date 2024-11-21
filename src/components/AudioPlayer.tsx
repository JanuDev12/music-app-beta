import { IconHeart, IconPlayerPauseFilled, IconPlayerPlayFilled, IconPlayerSkipBackFilled, IconPlayerSkipForwardFilled } from "@tabler/icons-react";
import { Button } from "./ui/button";

import { Shuffle, Repeat, Volume1, MonitorSpeakerIcon, EllipsisIcon, MicVocalIcon } from "lucide-react";
import IconPlaylists from "./icons/IconPlaylists";
import IconQueue from "./icons/IconQueue";
import { Slider } from "./ui/slider";
import { Separator } from "./ui/separator";
import { useEffect, useRef, useState } from "react";


function AudioPlayer({tracks}) {

    const soundRef = useRef<HTMLAudioElement>(null);

    const [isPlaying, setIsPlaying] = useState(false)
    const [trackDuration, setTrackDuration] = useState(0);
    const [trackCurrentTime, setTrackCurrentTime] = useState(0)

    useEffect(() => {
        if (soundRef.current) {
            soundRef.current.addEventListener('timeupdate', () => {
            setTrackCurrentTime(soundRef.current.currentTime || 0);
        });

        soundRef.current.addEventListener('loadedmetadata', () => {
            setTrackDuration(soundRef.current?.duration || 0); 
        })
       }

       console.log(soundRef)
    }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2,'0')}`;
  }

  const handleTimeChange = (value: number) => {
    if (soundRef.current) {
        soundRef.current.currentTime = value;
        setTrackCurrentTime(value)
    }
  }

  const handlePlay = () => {
    if(!isPlaying) {
        setIsPlaying(true)
        soundRef.current?.play()
    } else {
        setIsPlaying(false)
        soundRef.current?.pause()
    }
  } 

  const audioSrc = tracks[0].src;

  return (
    <div className="player relative bottom-0 right-0 left-0  py-3 px-6 my-1.5 mx-2  rounded-lg flex items-center text-white justify-between">
      {/* Players Button  */}

      <audio ref={soundRef} preload="auto">
        <source src={audioSrc} />
      </audio>

      {/* BLUR */}
      {/*  <div className="absolute inset-0 backdrop-blur z-auto">
            
      /div> */}

      <div className="flex items-center gap-3">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-[50%]"
          onClick={() => {
            handlePlay();
          }}
        >
          {!isPlaying ? <IconPlayerPlayFilled /> : <IconPlayerPauseFilled />}
        </Button>
        <div className="flex gap-3">
          <IconPlayerSkipForwardFilled />
          <IconPlayerSkipBackFilled />
          <Shuffle />
          <Repeat />
        </div>

        {/* Slider */}
        <div className="w-80 flex items-center gap-3 text-xs">
          <span>{formatTime(trackCurrentTime)}</span>
          <Slider 
          value={[trackCurrentTime]} 
          max={trackDuration} 
          step={0.5} 
          onValueChange={(value) => handleTimeChange(value[0])}
          />
          <span>{formatTime(trackDuration)}</span>
          <div>
            <Volume1 />
          </div>
        </div>

        {/* Card artist */}
        <div className="flex gap-3">
          <div className="size-9 bg-slate-400 rounded"></div>
          <div className="flex flex-col  text-xs">
            <span className="text-sm overflow-hidden truncate">
              {tracks[0].title}
            </span>
            <span className="overflow-hidden truncate">{tracks[0].artist}</span>
          </div>
        </div>
      </div>

      {/* Buttons Songs */}
      <div className="flex items-center gap-4">
        <IconHeart />
        <IconPlaylists />
        <IconQueue />
        <MonitorSpeakerIcon />
        <EllipsisIcon />

        <Separator orientation="vertical" color="gray" className="h-10" />

        <MicVocalIcon />
      </div>
    </div>
  );
}

export default AudioPlayer