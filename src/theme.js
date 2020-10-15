import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: { 
    primary: {
      main: '#333333', // FF6E00
    },
    secondary: {
      main: '#FF6E00', // 0091FF
    },
  },
  typography: {
    fontFamily: [
      '"Fredericka the Great',
      '"Amatic SC"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export const titleStyle = {
  marginTop: '40px',
  fontFamily: 'Special Elite, cursive',
  fontSize: '30px'
};

export const footerStyle = {
  position: 'fixed',
  width: '100%',
  bottom: '0',
  background: '#333333',
  alpha: 0
}
