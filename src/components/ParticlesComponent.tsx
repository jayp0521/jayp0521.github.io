import styled from 'styled-components'
import { IParticlesParams } from 'react-particles-js'
import { lazy, Suspense } from 'react'

export const ParticlesStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`

const Particles = lazy(() => import('react-particles-js'))

export const particlesParams: IParticlesParams = {
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
export default function FullPageLazyParticles() {
    return (
        <Suspense fallback={<div>Background Loading...</div>}>
            <ParticlesStyle>
                <Particles
                    width="100vw"
                    height="100vh"
                    params={particlesParams}
                />
            </ParticlesStyle>
        </Suspense>
    )
}
