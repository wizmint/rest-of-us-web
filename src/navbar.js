import React from 'react';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography';
import { Home, Book, AccountBox } from '@material-ui/icons';
import './navbar.css';

function NavBar(props) {

  return (
    <List component="nav">
      <ListItem component="div" style={{ marginLeft: -58 }} >
        <ListItemText inset>
          <Link href="https://www.google.com">
            <TypoGraphy color="inherit" variant="title">
                <div class="grid-container">
                  <div><Home /></div>
                  <div>Home</div>
                </div>
            </TypoGraphy>
          </Link>
        </ListItemText>

        <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              <div class="grid-container">
                <div><Book /></div>
                <div>Projects</div>
              </div>
            </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
            <TypoGraphy color="inherit" variant="title">
              <div class="grid-container">
                <div><AccountBox /></div>
                <div>Contact</div>
              </div>
            </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  )
}

export default NavBar;