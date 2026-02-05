import { MusicPagePart } from "./styled";
import Play from "../../assets/vectors/play.svg";
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
        <img loading="lazy" src={Play} />
      </div>
      <audio ref={audioRef} src={Song} />
    </MusicPagePart>
  );
};
