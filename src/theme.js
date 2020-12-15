import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: { 
    primary: {
      main: '#714694', // FF6E00
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
    ].join(',')
  },
});

export const titleStyle = {
  marginTop: '45px',
  marginBottom: '-5px',
  fontFamily: 'Special Elite, cursive',
  fontSize: '30px',
  color: '#ffffff'
};

export const footerStyle = {
  position: 'fixed',
  width: '100%',
  bottom: '0',
  background: '#333333',
  opacity: 1
};

export const listContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  minWidth: 100
};
