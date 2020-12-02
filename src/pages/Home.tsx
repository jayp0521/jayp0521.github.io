import AboutMe from '../components/AboutMe'
import styled from 'styled-components'
import Particles, { IParticlesParams } from 'react-particles-js'
import { Fade } from 'react-awesome-reveal'

const AboutMeStyle = styled.div`
  width: 60vw;
  padding: 10vh 0;
`

const PageStyle = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ParticlesStyle = styled.div`
  position: fixed;
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
            character: {
                value: [ '0', '1' ],
                font: 'Verdana',
                weight: '400',
                style: '',
            },
        },
        color: {
            value: '#64ffda',
        },
        size: {
            value: 10,
            random: false,
        },

    },
}

export default function Home() {
    return (
        <>
            <PageStyle>
                <Fade triggerOnce duration={2000}>
                    <AboutMeStyle id='about_me' key='about_me'><AboutMe/></AboutMeStyle>
                </Fade>
            </PageStyle>
            <ParticlesStyle><Particles width="100vw" height="100vh" params={particlesParams}/></ParticlesStyle>
        </>
    )
}
