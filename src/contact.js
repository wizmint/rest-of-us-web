import React from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";

class Contact extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex", 
          justifyContent: "center",
          margin: 20, 
          marginBottom: 100,
          padding: 20,
          color: "white"
        }}> 

        <form style={{ minWidth: "200px", maxWidth: "800px", height: "1000px" }}>
          <h1>Contact Form</h1>

          <FormControl margin="normal" fullWidth style={{ color: "white" }}>
            <InputLabel htmlFor="name" style={{ color: "white" }}>Name</InputLabel>
            <Input id="name" type="text" style={{ color: "white" }} />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email" style={{ color: "white" }}>Email</InputLabel>
            <Input id="email" type="email" style={{ color: "white" }} />
          </FormControl>

          <FormControl margin="normal" fullWidth style={{ borderColor: "white" }}>
            <InputLabel htmlFor="email" style={{ color: "white" }}>Message</InputLabel>
            <Input id="email" multiline rows={10} style={{ color: "white" }} />
          </FormControl>

          <Button variant="contained" color="secondary" size="medium">Send</Button>
        </form>
      </div>
    );
  }
}

export default Contact;