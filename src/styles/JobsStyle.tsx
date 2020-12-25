import styled from 'styled-components'
import { rgba } from 'polished'
import { rootColors } from './globalStyles'

export const JobsName = styled.div`
    font-family: var(--font-mono);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 2vh 0;
    cursor: pointer;
    background: linear-gradient(
            ${rgba(rootColors.orange, 0.2)},
            ${rgba(rootColors.orange, 0.2)}
        )
        50% 50% no-repeat;
    background-size: 0 100%;
    transition: background-size 0.5s, color 0.5s;

    :hover {
        width: 100%;
        background-size: 100% 100%;
    }
`

export const JobsDescription = styled.div`
    font-family: var(--font-mono);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2vh 2vw;
    border: ${rgba(rootColors.codeColor, 1)} 1px solid;
    max-height: 80vh;

    .position {
        color: ${rgba(rootColors.orange, 1)};
        margin: 1vh 0;
    }

    .date {
        margin: 1vh 0;
    }

    .description {
        margin: 1.5vh 0;
    }
`

export const JobsMain = styled.div`
    display: flex;
`

export const JobsContainer = styled.div<{ primary?: boolean }>`
    flex: ${props => (props.primary ? `3 1 auto` : `1 1 auto`)};
    width: ${props => (props.primary ? `77%` : `auto`)};
    display: flex;
    flex-direction: column;
    min-height: 100%;

    .active {
        background: ${rgba(rootColors.orange, 0.2)};
        transition: background-color 0.5s ease-in-out;
        animation: grow 1s;
        border-right: ${rgba(rootColors.orange, 1)} 1px solid;
        z-index: 1;

        &:hover {
            background: ${rgba(rootColors.orange, 0.4)};
        }

        @keyframes grow {
            from {
                border-right: ${rgba(rootColors.orange, 1)} 1px solid;
            }
            to {
                border-right: ${rgba(rootColors.orange, 1)} 1px solid;
            }
        }
    }
`
