import AboutMe from '../components/AboutMe'
import styled from 'styled-components'

const AboutMeStyle = styled.div`
  width: 60vw;
`

const PageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Home() {
    return (
        <>
            <PageStyle>
                <AboutMeStyle><AboutMe/></AboutMeStyle>
            </PageStyle>
        </>
    )
}
