import React, { useState } from "react";
import "./index.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MessageCard = () => {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <form className="socialform" noValidate autoComplete="off">
        <TextField id="standard-basic" label="Name" />
        <TextField id="standard-basic" label="Email" />
        <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          placeholder="Enter Your Message Here"
        />
        <Button variant="contained">Send Message</Button>
      </form>
    </React.Fragment>
  );
};

export default MessageCard;
