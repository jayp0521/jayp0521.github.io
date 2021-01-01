import styled from 'styled-components'
import { rootColors } from '../styles/globalStyles'
import { rgba } from 'polished'

const HiMyName = styled.p`
    color: ${rgba(rootColors.codeColor, 1)};
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    max-width: 400px;
`

const MyName = styled.p`
    color: ${rgba(rootColors.orange, 1)};
    font-size: clamp(var(--fz-xl), 5vw, var(--fz-2xl));
    font-weight: bold;
    margin: 2vh 0;
`

const Me = styled(MyName)`
    color: #80b3e0;
`

const Description = styled(HiMyName)`
    color: #4b92d1;
    line-height: 1.5;
`

export default function Intro() {
    return (
        <>
            <HiMyName>Hi, my name is</HiMyName>
            <MyName>Jay Patel</MyName>
            <Me>I help build and protect the web.</Me>
            <Description>
                I am currently a Software Development Engineer I at Amazon based
                in New York. I specialize in building, designing, testing,
                probing websites, infrastructure, and more.
            </Description>
        </>
    )
}
