import styled from 'styled-components'

const GradientList = styled.ul`
    /* List */
    padding: 0 2%;
    overflow: auto;

    /* List element */

    li {
        counter-increment: index;
        display: flex;
        align-items: center;
        padding: 12px 0;
        box-sizing: border-box;
    }

    /* Element counter */

    li::before {
        content: counters(index, '.', decimal-leading-zero);
        font-size: 1.5rem;
        text-align: right;
        font-weight: bold;
        min-width: 50px;
        padding-right: 12px;
        font-feature-settings: 'tnum';
        font-variant-numeric: tabular-nums;
        background-image: linear-gradient(to bottom, aquamarine, orangered);
        background-attachment: fixed;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Element separation */

    li + li {
        border-top: 1px solid rgba(255, 255, 255, 0.3);
    }
`

export default GradientList
