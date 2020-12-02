import AboutMe from '../components/AboutMe'
import styled from 'styled-components'
import Particles, { IParticlesParams } from 'react-particles-js'

const AboutMeStyle = styled.div`
  width: 60vw;
`

const PageStyle = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ParticlesStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const particlesParams: IParticlesParams = {
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
    },
    particles: {
        line_linked: {
            enable: false,
        },
        collisions: {
            enable: true,
            mode: 'bounce',
        },
        number: {
            value: 60,
        },
        shape: {
            type: 'character',
            character: { value: [ '0', '1' ] },
        },
    },
}

export default function Home() {
    return (
        <>
            <PageStyle>
                <AboutMeStyle><AboutMe/></AboutMeStyle>
                <ParticlesStyle><Particles width="100vw" height="100vh" params={particlesParams}/></ParticlesStyle>
            </PageStyle>
        </>
    )
}
