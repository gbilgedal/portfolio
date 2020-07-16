import React, { useState } from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ContactViaIconComponent from "./contactvia";
import Universe from "./universe";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const linkStyle = { textDecoration: "none", width: "100%", textAlign:"center" };

const Navbar = () => {
  const classes = useStyles();
  return (
    <div style={{ opacity: "50%" }} className="navbar">
      <Link style={linkStyle} to="/portfolio">
        <Button className="buttonStyle" size="large">
          Home
        </Button>
      </Link>
      <Link style={linkStyle} to="/portfolio/about">
        <Button className="buttonStyle" size="large">
          About
        </Button>
      </Link>
      <Link style={linkStyle} to="/portfolio/projects">
        <Button className="buttonStyle" size="large">
          Projects
        </Button>
      </Link>
      <Link style={linkStyle} to="/portfolio/blogposts">
        <Button className="buttonStyle" size="large">
          Blog Posts
        </Button>
      </Link>
      <Link style={linkStyle} to="/portfolio/resume">
        <Button className="buttonStyle" size="large">
          Resume
        </Button>
      </Link>
      <Link style={linkStyle} to="/portfolio/contact_me">
        <Button className="buttonStyle" size="large">
          Contact
        </Button>
      </Link>
      <ContactViaIconComponent />
      <Universe />
    </div>
  );
};

export default Navbar;
