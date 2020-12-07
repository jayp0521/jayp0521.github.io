import { createGlobalStyle } from 'styled-components'
import { darken, rgba } from 'polished'

export const rootColors = {
    orange: '#ffa200',
    codeColor: '#64ffdb',
    backgroundColor: '#001a30',
}

const GlobalStyle = createGlobalStyle`
  * {
    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --white: #FFF;

    --fz-sm: 16px;
    --fz-md: 20px;
    --fz-lg: 24px;
    --fz-xl: 32px;
    --fz-2xl: 64px;
  }
  
  ::-webkit-scrollbar {
        width: 4px;
        height: 4px;
    }
    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }
    ::-webkit-scrollbar-thumb {
        background: ${rgba(rootColors.orange, 0.9)};
        border: 0;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${rgba(rootColors.orange, 1)};
    }
    ::-webkit-scrollbar-thumb:active {
        background: ${darken(0.2, rgba(rootColors.orange, 1))};
    }
    ::-webkit-scrollbar-track {
        background: #666666;
        border: 0 none #ffffff;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }

  body {
    margin: 0;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${rgba(rootColors.backgroundColor, 1)};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`

export default GlobalStyle
