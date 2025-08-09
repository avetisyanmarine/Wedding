import { ForthPageBlockPart } from "./styled"
export const ForthPageBlock = ({ ImageSrc, bigText, mapSrc }) => {
    return (
        <>
            <ForthPageBlockPart>
                <h2>{bigText}</h2>
                <img loading="lazy" src={ImageSrc} />
                <h3>Ինչպե՞ս հասնել</h3>
               <iframe loading="lazy" data-aos="fade-down" src={mapSrc} allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            </ForthPageBlockPart>
        </>
    )
}