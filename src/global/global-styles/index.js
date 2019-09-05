// @flow
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'
import theme from 'global/theme'

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  html {
    font-size: 62.5%;
  }

  *, *::after, *::before {
    /* Include padding and border in the element's total width and height: */
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    color: ${theme.colors.themes.common.white};
    background: ${theme.colors.themes.hippocampus.blueDark};

    &, button, input, option, select, textarea {
      font-family: 'Arial', sans-serif;
    }

    &.fontLoaded {
      &, button, input, option, select, textarea {
        /*font-family: 'geomanist', 'Arial', sans-serif;*/
      }
    }

    .overflowHidden {
      overflow: hidden;
      position: fixed;
    }
  }

  button {
    background: none;
    padding: 0;
  }

  ul {
    padding: 0;
    list-styled: none;
  }
`

export default GlobalStyle
