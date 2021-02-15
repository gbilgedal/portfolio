import React, { useState, useStyles } from "react";
import "./index.css";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../home/navbar";

let pic = require("./images/pp.PNG");
const useStyles3 = makeStyles({
  root: {
    minWidth: 450,
    minHeight: 300,
    backgroundColor: "whitesmoke",
    opacity: "80%",
    flexDirection: "column",
    margin: "0 auto",
    padding: "5px 0",
    alignItems: "center",
    display: "flex",
  },
});

const About = () => {
  const classes = useStyles3();
  return (
    <div className="container-A container full-screen">
      <Navbar />
      <div className="aboutPart">
        <div className="aboutLabel fade-in">About Me</div>
        <div className="doubleThis fade-in">
          <div className="imgDiv">
            <img className="imgStyle" src={pic} />
          </div>

          <Card className={classes.root}>
            <p>
              Hey there, I am Bilge. Currently I can be considered as a{" "}
              <i>infosec enthusiast</i> who is curious about web development and
              security. Outside of web, I am interested in reverse engineering,
              algorithms, cryptography, vulnerability research, osint, cyber
              intel. Also I sometimes build and/or code robots for competition
              since I am a team member of MUFE Robotics.
            </p>
            <p>
              I've been driven into computers/programming since I was little.
              I've started my coding journey with an arduino project, then
              learned C for a bit, hackathons, programming conventions,
              bootcamps and so forth, here I am. I am still and will be learning
              lots of stuff!
            </p>
            <p>
              I've done things about steganography, reverse, cryptography, web
              vulns till this day. I'm still learning lots of things every day.
              I like solving machines and participating in CTFs.
            </p>
            <p>
              I <em>love</em> music(listening and making), learning new
              languages, video games, maths and physics.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
