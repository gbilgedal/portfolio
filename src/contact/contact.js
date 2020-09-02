import React, { useState } from "react";
import "./index.css";
import Navbar from "../home/navbar";
import MessageCard from "./messageCard";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    backgroundColor: "whitesmoke",
    margin: "0 5px",
    border: "solid 10px black",
    opacity: "80%",
    width: "430px",
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <div className="container full-screen ">
      <Navbar />
      <div className="contactPart">
        <div className="fade-in reachOut">Reach out to me!</div>
        <div className="double">
          <Card className={classes.root}>
            <div className="social fade-in">
              <p>
                <span className="reachOutText">
                  You can reach out to me
                  <br />
                  via social media
                </span>
              </p>
              <br />
              <a
                rel="noopener noreferrer"
                href="https://github.com/gbilgedal/"
                target="_blank"
              >
                <GitHubIcon style={{ fontSize: 60, color: "black" }} />
              </a>
              &nbsp;
              <a href="https://tr.linkedin.com/in/gbilgedal" target="_blank">
                <LinkedInIcon style={{ fontSize: 60, color: "black" }} />
              </a>
              &nbsp;
              <a href="http://t.me/ahripol" target="_blank">
                <TelegramIcon style={{ fontSize: 60, color: "black" }} />
              </a>
            </div>
          </Card>

          <Card className={classes.root}>
            <div className="social fade-in">
              <p>
                <span className="messageText">
                  <br />
                  <br />
                  Or leave a message here!:
                </span>
              </p>
              <MessageCard />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
