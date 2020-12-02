import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --background-color: #001a30;
    --code-color: #64ffda;
    --orange: #FF9900;
    --white: #FFF;
    
    --fz-sm: 16px;
    --fz-md: 18px;
    --fz-lg: 24px;
    --fz-xl: 32px;
    --fz-2xl: 64px;
  }

  body {
    margin: 0;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--background-color);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`

export default GlobalStyle
