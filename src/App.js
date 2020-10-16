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
import { theme, titleStyle, listContainer } from './theme.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import "./theme.js"
import './navbar.css'
import HomePage from './HomePage.js'
import ProjectsPage from './ProjectsPage.js'
import ContactPage from './ContactPage.js'

class App extends Component {
  render() { 
    return (
      <ThemeProvider theme={theme}><div><Router><div>

        {/* Navigation Bar */}
        <AppBar style={{ opacity: .9, backgroundImage: "linear-gradient(#048, #714694)" }}> {/* #9f7b97, #6156a4 */}
          <Toolbar><TypoGraphy style={titleStyle}>Stria</TypoGraphy></Toolbar>
          <nav>
            <List style={listContainer}>
              <ListItem component="div" button="true" disableGutters="true">
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  <ListItemText inset>
                      <TypoGraphy color="inherit">
                          <div class="grid-container" style={{ maxWidth: 40, marginLeft: -30 }}>
                            <div><Home /></div>
                            <div style={{ fontSize: 14, position: 'relative', bottom: -2 }}>Home</div>
                          </div>
                      </TypoGraphy>
                  </ListItemText> 
                </Link>
              </ListItem>
              <ListItem component="div" button="true" disableGutters="true">
                <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}>
                  <ListItemText inset>
                      <TypoGraphy color="inherit" variant="title">
                        <div class="grid-container" style={{ maxWidth: 40, marginLeft: -30 }}>
                          <div><Book /></div>
                          <div style={{ fontSize: 14, position: 'relative', bottom: -4 }}>Projects</div>
                        </div>
                      </TypoGraphy>
                  </ListItemText>
                </Link>
              </ListItem>
              <ListItem component="div" button="true" disableGutters="true">
                <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                  <ListItemText inset> 
                      <TypoGraphy color="inherit" variant="title">
                        <div class="grid-container" style={{ maxWidth: 40, marginLeft: -30 }}>
                          <div><AccountBox /></div>
                          <div style={{ fontSize: 14, position: 'relative', bottom: -4 }}>Contact</div>
                        </div>
                      </TypoGraphy>
                  </ListItemText>
                </Link>
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
