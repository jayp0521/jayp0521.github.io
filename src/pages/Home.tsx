import Intro from '../components/Intro'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { Fade } from 'react-awesome-reveal'
import Experience from '../components/Experience'
import {
    particlesParams,
    ParticlesStyle,
} from '../components/ParticlesComponent'

const IntroStyle = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (min-width: 768px) {
        width: 80vw;
    }
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

    .mw800 {
        max-width: 800px;
    }
`

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
                        <div className={'background padding mw800'}>
                            <Experience />
                        </div>
                    </IntroStyle>
                </PositionStyle>
            </Fade>
        </>
    )
}
