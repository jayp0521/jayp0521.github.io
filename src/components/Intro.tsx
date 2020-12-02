import styled from 'styled-components'

const HiMyName = styled.p`
  color: var(--code-color);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  max-width: 400px;
`

const MyName = styled.p`
  color: var(--orange);
  font-size: clamp(var(--fz-xl), 5vw, var(--fz-2xl));
  font-weight: bold;
  margin: 3vh 0;
`

const Me = styled(MyName)`
  color: #80b3e0;
`

const Description = styled(HiMyName)`
  color: #4b92d1;
  line-height: 1.5;
`

export default function AboutMe() {
    return (
        <>
            <HiMyName>Hi, my name is</HiMyName>
            <MyName>Jay Patel</MyName>
            <Me>I help build and protect the web.</Me>
            <Description>I am currently a Software Development Engineer I at Amazon based in New York. I
                specialize in building, designing, testing, and probing websites, infrastructure, and
                more.</Description>
        </>
    )
}
