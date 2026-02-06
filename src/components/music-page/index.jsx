import { MusicPagePart } from "./styled";
import Music from "../../assets/vectors/music.png";
import Song from "../../assets/audio/song.mp3";
import { useRef, useState } from "react";

export const MusicPage = () => {
  const audioRef = useRef(null);

  const handleClick = () => {
    audioRef.current.currentTime = 0.43;
    audioRef.current.play();
  };

  return (
    <MusicPagePart onClick={handleClick}>
      <div>
        <img className="w-[20px]" loading="lazy" src={Music} />
      </div>
      <audio ref={audioRef} src={Song} autoPlay />
    </MusicPagePart>
  );
};
