import Intro from '../components/Intro'
import styled from 'styled-components'
import Particles, { IParticlesParams } from 'react-particles-js'
import { Fade } from 'react-awesome-reveal'
import Experience from '../components/Experience'

const IntroStyle = styled.div`
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const PositionStyle = styled.div`
    .center {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .padding {
        padding: 3vh 3vw;
    }

    .background {
        background: var(--background-color);
    }
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
                value: ['0', '1'],
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
            <ParticlesStyle>
                <Particles
                    width="100vw"
                    height="100vh"
                    params={particlesParams}
                />
            </ParticlesStyle>
            <Fade triggerOnce duration={2000}>
                <PositionStyle>
                    <IntroStyle id="intro" key="intro">
                        <div className={'background padding'}>
                            <Intro />
                        </div>
                    </IntroStyle>
                    <IntroStyle
                        id="experience"
                        key="experience"
                        className={'center'}
                    >
                        <div className={'background padding'}>
                            <Experience />
                        </div>
                    </IntroStyle>
                </PositionStyle>
            </Fade>
        </>
    )
}
