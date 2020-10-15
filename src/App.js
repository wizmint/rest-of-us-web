/**
 * @file 
 * App entry point and navigation router.
 *
 * [this space left intentionally blank]
 */

import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Home, Book, AccountBox } from '@material-ui/icons'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme, titleStyle } from './theme.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import "./theme.js"
import './navbar.css'
import HomePage from './HomePage.js'
import ProjectsPage from './ProjectsPage.js'
import ContactPage from './ContactPage.js'

//import BottomNavigation from '@material-ui/core/BottomNavigation';
//import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

class App extends Component {

    render() {
        return (
          <ThemeProvider theme={theme}><div><Router><div>

          {/* Navigation Bar */}
          <AppBar style={{ opacity: .9, backgroundImage: "linear-gradient(#9f7b97, #6156a4)" }}>
            <Toolbar> <TypoGraphy color="white" style={titleStyle}>Stria Terminalis</TypoGraphy> </Toolbar>
            <nav>
              <List component="nav">
                <ListItem component="div" style={{ marginLeft: -58 }} >
                  <ListItemText inset>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                      <TypoGraphy color="inherit">
                          <div class="grid-container">
                            <div><Home /></div>
                            <div style={{ fontSize: 14 }}>Home</div>
                          </div>
                      </TypoGraphy>
                    </Link>
                  </ListItemText> 
                  <ListItemText inset>
                    <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>
                      <TypoGraphy color="inherit" variant="title">
                        <div class="grid-container">
                          <div><Book /></div>
                          <div style={{ fontSize: 14 }}>Projects</div>
                        </div>
                      </TypoGraphy>
                    </Link>
                  </ListItemText>
                  <ListItemText inset> 
                    <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                      <TypoGraphy color="inherit" variant="title">
                        <div class="grid-container">
                          <div><AccountBox /></div>
                          <div style={{ fontSize: 14 }}>Contact</div>
                        </div>
                      </TypoGraphy>
                    </Link>
                  </ListItemText>
                </ListItem>
              </List>
            </nav>
          </AppBar>
 
          {/* SPA "pages" */}
          <Switch>
            <Route exact path="/"> <HomePage /> </Route>
            <Route path="/projects"> <ProjectsPage /> </Route>
            <Route path="/contact"> <ContactPage /> </Route> 
          </Switch>

        </div></Router></div></ThemeProvider>
        );
    }
}
export default App;
