import styled from 'styled-components'

const TextIconButton = styled.button`
    text-decoration: none;
    cursor: pointer;
    background: none;
    border: 0;
    outline: none;
    color: var(--white);
    font-size: clamp(var(--fz-md), 5vw, var(--fz-lg));
    transition: color 1s ease;

    :hover {
        color: rgba(var(--code-color), 1);
    }

    .fai {
        color: rgba(var(--code-color), 1);
    }
`

export default TextIconButton
