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
    color: var(--code-color);
  }

  .fai {
    color: var(--code-color);
  }
`

export default TextIconButton
