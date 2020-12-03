import styled from 'styled-components'

export const JobsName = styled.div`
    border: var(--code-color) 1px solid;
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
            rgba(100, 255, 218, 0.3),
            rgba(100, 255, 218, 0.3)
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
    border: var(--code-color) 1px solid;
    width: 65vw;
    max-width: 800px;
`

export const JobsContainer = styled.div<{ primary?: boolean }>`
    flex: ${props => (props.primary ? `3 1 auto` : `1 1 auto`)};
    width: ${props => (props.primary ? `77%` : `auto`)};
    display: flex;
    flex-direction: column;
    min-height: 100%;

    .active {
        background: rgba(100, 255, 218, 0.1);
        transition: background-color 0.5s ease-in-out;

        &:hover {
            background: rgba(100, 255, 218, 0.3);
        }
    }
`
