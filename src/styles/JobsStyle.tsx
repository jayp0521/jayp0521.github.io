import styled from 'styled-components'

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
    background: linear-gradient(rgba(255, 153, 0, 0.2), rgba(255, 153, 0, 0.2))
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
    border: var(--code-color) 1px solid;

    .position {
        color: var(--orange);
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
        background: rgba(255, 153, 0, 0.2);
        transition: background-color 0.5s ease-in-out;
        border-right: var(--orange) 2px solid;
        z-index: 1;

        &:hover {
            background: rgba(255, 153, 0, 0.4);
        }
    }
`
