import { MusicPagePart } from "./styled"
import Pause from "../../assets/vectors/pause.svg"
import Play from "../../assets/vectors/play.svg"
import Song from "../../assets/audio/song.mp3"
import { useRef, useState } from "react"

export const MusicPage = () => {
    const [play, setPlay] = useState(false)
    const audioRef = useRef(null)

    const handleClick = () => {
        if (play) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setPlay(!play)
    }

    return (
        <MusicPagePart>
            <div>
                <h4>Ed Sheeran</h4>
                <p>Perfect</p>
            </div>
            <div onClick={handleClick}>
                <img loading="lazy" src={play ? Pause : Play} />
            </div>
            <audio ref={audioRef} src={Song} />
        </MusicPagePart>
    )
}
