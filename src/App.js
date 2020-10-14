import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Home, Book, AccountBox } from '@material-ui/icons'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, titleStyle, footerStyle } from './theme.js';
import Contact from './contact'
import Posts from './posts'
import NavBar from './navbar'
import "./App.css";
import "./theme.js";

class App extends Component {

  sayHello() {
    alert('Hello!');
  }
  
  render() { 
    return (
      <ThemeProvider theme={theme}>
        <div>

          <AppBar color="primary" style={{position:'fixed', top:'0' }} position="static">
            <Toolbar> 
              <TypoGraphy color="white" style={titleStyle}>The Rest of Us</TypoGraphy>
            </Toolbar>
            <NavBar></NavBar>
          </AppBar>

          {/*<ReactPlayer url="https://youtu.be/MyG3TPyaCVw" width="100%" />*/}
          {/*<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.trendhunterstatic.com%2Fthumbs%2Fpanoramic-illustrations.jpeg&f=1&nofb=1" alt="Title" style={{ width: "100%", marginTop: "50px" }}/>*/}

          <Posts />

          <Contact />

          <BottomNavigation value={0} onChange={(event, newValue) => { this.value = 1; this.sayHello(); }} showLabels style={footerStyle}> 
            <BottomNavigationAction label="Home" style={{ color:'white' }} value="home" icon={<Home />} />
            <BottomNavigationAction label="Posts" style={{ color:'gray' }} value="posts" icon={<Book />} />
            <BottomNavigationAction label="Contact" style={{ color:'gray' }} value="contact" icon={<AccountBox />} />
          </BottomNavigation>

        </div>
      </ThemeProvider>
    );
  }
}
export default App;









//import FavoriteIcon from '@material-ui/icons/Favorite';
//import RestoreIcon from '@material-ui/icons/Restore';
//import AddLocationIcon from '@material-ui/icons/AddLocation';
//import ReactPlayer from "react-player";
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
//import "./sass.scss";
//import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';

