import { ThirdPagePartContext } from "../styled"
import { ThirdPageBlockPart, ThirdPageBlockPartSvg } from "./styled"

export const ThirdPageBlock = ({ ImageSrc, number, bigText, smallText, uniqueMargin, line }) => {
    return (
        <>
            <ThirdPageBlockPart style={{ marginTop: { uniqueMargin } ? `${uniqueMargin}px` : "" }}>
                <ThirdPageBlockPartSvg line={line}>
                    <img loading="lazy" src={ImageSrc} />
                </ThirdPageBlockPartSvg>
                <ThirdPagePartContext data-aos="fade-left" >
                    <h3>{number}</h3>
                    <h3>{bigText}</h3>
                    <p>{smallText}</p>
                </ThirdPagePartContext>
            </ThirdPageBlockPart>
        </>
    )
}