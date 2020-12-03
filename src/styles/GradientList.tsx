import styled from 'styled-components'

const GradientList = styled.ul`
    /* List */
    padding: 0 2%;

    ul {
        counter-reset: index;
        padding: 0;
        max-width: 300px;
    }

    /* List element */

    li {
        counter-increment: index;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
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
        align-self: flex-start;
        background-image: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(aquamarine),
            to(orangered)
        );
        background-image: linear-gradient(to bottom, aquamarine, orangered);
        background-attachment: fixed;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Element separation */

    li + li {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
`

export default GradientList
