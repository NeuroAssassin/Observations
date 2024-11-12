
  "use client";
  import { createTheme } from '@mui/material/styles';

  const theme = createTheme({
    cssVariables: {
      colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#b28c02'
          },
          background: {
            default: '#f8f8f8',
            paper: '#fff'
          }
        },
      },
      dark: {
        palette: {
          primary: {
            main: '#FFC904'
          },
          background: {
            paper: '#222222'
          }
        }
      }
    },
  });

  export default theme;
  