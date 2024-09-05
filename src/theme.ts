import { createTheme, PaletteColorOptions, Theme, ThemeOptions } from '@mui/material/styles';
import { createBoilerplateTheme } from 'components-library';

const customConstants: ThemeOptions = {
  palette: {
    primary: {
      main: "#054c32",
    },
    secondary: {
      main: "#fcbd1b",
    }
  },
  custom: {
    constants: {
      borderRadius: 5,
    }
  }

};

let customTheme = createBoilerplateTheme(customConstants) as Theme;

const customThemeOptions: ThemeOptions = {
  palette: {
    secondary: {
      contrastText: customTheme.palette.primary.main, 
    } as PaletteColorOptions,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: customConstants.palette!.primary as string,
          }
        },
        {
          props: { variant: 'contained' },
          style: {
            color: customConstants.palette!.primary as string,
          }
        },
      ],
      defaultProps: {
        color: 'secondary'
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: customTheme.palette.primary.main
        }
      }
    },
  },
  custom: {
    constants: {
      appBarTextColor: customTheme.palette.primary.main
    },
  }
};

customTheme = createTheme(customTheme, customThemeOptions);

export default customTheme;
