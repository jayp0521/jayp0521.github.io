import styled from 'styled-components'

const HiMyName = styled.p`
  color: var(--code-color);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md))
`

const MyName = styled.p`
  color: #FF9900;
  font-size: clamp(var(--fz-xl), 5vw, var(--fz-2xl));
  font-weight: bold;
  margin: 3vh 0;
`

const Me = styled(MyName)`
  color: #C8C8C8;
`

const Description = styled(HiMyName)`
  color: #b3b3b3;
`

export default function AboutMe() {
    return (
        <>
            <HiMyName>Hi, my name is</HiMyName>
            <MyName>Jay Patel</MyName>
            <Me>I build and protect the web.</Me>
            <Description>I am currently hold the title of Software Development Engineer I at Amazon based in New York. I
                specialize in building, designing, testing, and probing websites, infrastructure, and
                more.</Description>
        </>
    )
}
