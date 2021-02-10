import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export const lightTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  
  overrides: {
    MuiAppBar: {
      root: {
        background: "#fff !important",
      },
    },
    MuiPaper: {
      root: {
        overflow: "visible !important",
      },
    },
  },
  palette: {
    background: {
      default: "#fff",
    },
  },
}));

export const darkTheme = responsiveFontSizes(createMuiTheme({
  props: {
    MuiAppBar: {
      position: "sticky",
    },
    MuiCard: {
      elevation: 0,
    },
  },
  palette: {
    type: "dark",
    primary: {
      light: '#47e2cc',
      main: '#0cb7e4',
      dark: '#27d4e4',
      contrastText: '#ffffff',
    },
    background: {
     
      paper: grey[900],
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        overflow: "#47e2cc visible !important",
      },
    },
    MuiTable: {
      root: {
        background: "transparent !important",
      },
      
    },
  
    MuiMenuItem : {
        root: {
          color: "#5ef2c2  !important",
        },
       },
    MuiLink: {
        root: {
          color: 'linear-gradient(45deg, #5ef2c2 30%, #0cb7e4  90%)'
        },
    },
    MuiButton: {
      root: {
        color: "#5ef2c2 !important",
      },
    },
    MuiTextField: {
        root: {      
          overflow: "visible !important",
          color: "#23c8da"
        },
    },
    MuiTypography: {
        root: {
            outlineStyle: "#0cb7e4",
            color: "#47e2cc" ,
          },
    },
  },
}));

export default {
  darkTheme,
  lightTheme,
};
