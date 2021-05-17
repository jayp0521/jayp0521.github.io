import styled from 'styled-components'
import { rootColors } from './globalStyles'
import { rgba } from 'polished'

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
        color: ${rgba(rootColors.codeColor, 1)};
    }

    .fai {
        color: ${rgba(rootColors.codeColor, 1)};
    }
`

export default TextIconButton
