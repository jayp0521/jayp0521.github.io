import Intro from '../components/Intro'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import FullPageLazyParticles from '../components/ParticlesComponent'
import { lazy, Suspense } from 'react'

const Experience = lazy(() => import('../components/Experience'))

const SectionStyle = styled.div`
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
        place-items: center;
    }

    .padding {
        padding: 3vh 3vw;
    }

    .background {
        background: var(--background-color);
    }

    .mw800 {
        width: min(95vw, 800px);
    }
`

function ExperienceFunction() {
    return (
        <Suspense fallback={<p>Loading My Experience</p>}>
            <SectionStyle id="experience" key="experience" className={'center'}>
                <div className={'background padding mw800'}>
                    <Experience />
                </div>
            </SectionStyle>
        </Suspense>
    )
}

export default function Home() {
    return (
        <>
            <FullPageLazyParticles />
            <Fade triggerOnce duration={2000}>
                <PositionStyle>
                    <SectionStyle id="intro" key="intro">
                        <div className={'background padding'}>
                            <Intro />
                        </div>
                    </SectionStyle>
                    <ExperienceFunction />
                </PositionStyle>
            </Fade>
        </>
    )
}
