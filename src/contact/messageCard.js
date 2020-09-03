import React, { useState } from "react";
import "./index.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
const MessageCard = () => {
  const [value, setValue] = React.useState("Controlled");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [msg, setMsg] = React.useState("");

  let templateParams = {
    from_name: name + " email:" + email,
    to_name: "bilge",
    subject: email,
    message: msg,
  };

  const handleChange = (param, e) => {
    switch (param) {
      case "msg":
        setMsg(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "porfolio_messages",
        "template_3posh5e",
        templateParams,
        "user_suDWm3odcFybLLUUwZ3OR"
      )
      .then((result) => {
        document.forms["socialForm"].reset();
      });
  };

  return (
    <React.Fragment>
      <form
        className="socialform"
        id="socialForm"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          onChange={(e) => handleChange("name", e)}
        />
        <TextField
          id="standard-basic"
          label="Email"
          onChange={(e) => handleChange("email", e)}
        />
        <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          placeholder="Enter Your Message Here"
          onChange={(e) => handleChange("msg", e)}
        />
        <Button type="submit" variant="contained">
          Send Message
        </Button>
      </form>
    </React.Fragment>
  );
};

export default MessageCard;
