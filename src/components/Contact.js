/**
 * @file
 * Displays the contact page.
 */

import React from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { Home, Book, AccountBox } from '@material-ui/icons'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { footerStyle } from '../theme.js' 

class Contact extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex", 
          justifyContent: "center",
          margin: 20, 
          marginBottom: 50,
          marginTop: 140,
          padding: 20,
          color: "white"
        }}> 

        <form style={{ minWidth: "200px", maxWidth: "600px" }}>
          <h1 style={{ fontWeight: "normal", fontSize: "28px" }}>Contact Form</h1>

          <FormControl margin="normal" fullWidth style={{ borderBottom: "2px dotted #777777" }}>
            <InputLabel htmlFor="name" style={{ color: "white" }}>Name</InputLabel>
            <Input id="name" type="text" style={{ color: "white" }} />
          </FormControl>

          <FormControl margin="normal" fullWidth style={{ borderBottom: "2px dotted #777777" }}>
            <InputLabel htmlFor="email" style={{ color: "white" }}>Email</InputLabel>
            <Input id="email" type="email" style={{ color: "white" }} />
          </FormControl>

          <FormControl margin="normal" fullWidth style={{ borderBottom: "2px dotted #777777" }}>
            <InputLabel htmlFor="email" style={{ color: "white" }}>Message</InputLabel>
            <Input id="email" multiline rows={10} style={{ color: "white" }} />
          </FormControl>

          <Button variant="contained" color="primary" size="medium">Send</Button>
        </form>

       <BottomNavigation value={0} onChange={(event, newValue) => { 
        //this.sayHello(); 
      alert(newValue);
    }} showLabels style={footerStyle}> 
        <BottomNavigationAction label="Home" style={{ color:'gray' }} value="home" icon={<Home />} />
        <BottomNavigationAction label="Projects" style={{ color:'gray' }} value="posts" icon={<Book />} />
        <BottomNavigationAction label="Contact" style={{ color:'white' }} value="contact" icon={<AccountBox />} />
      </BottomNavigation> 

      </div>
    );
  }
}

export default Contact;
