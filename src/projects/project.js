import React, { useState } from "react";
import "./index.css";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles({
  root: {
    minHeight: 185,
    backgroundColor: "whitesmoke",
    margin: "30px",
    marginLeft: "30px",
    padding: "10px",
    opacity: "100%",
    display: "flex",
  },
});
const logoThingie = {
  width: "40vw",
  margin: "0 20px",
};
const Project = (props) => {
  const classes = useStyles();
  let logo;
  //manual picture setting
  if (props.index === 0) {
    logo = require("./images/to-doer.png");
  }
  if (props.index === 1) {
    logo = require("./images/mad-libs.png");
  }
  if (props.index === 2) {
    logo = require("./images/sui-prev.png");
  }
  if (props.index === 3) {
    logo = require("./images/tqbf.png");
  }

  return (
    <div>
      <div className="project">
        <Card className={classes.root}>
          <div className="cardCss">
            <div className="innerCardCss">
              <img style={logoThingie} src={logo} />{" "}
            </div>
            <p className="desc">{props.desc}</p>
            <div className="innerCardCss">
              {props.github&&<a href={props.github} target="_blank">
                <GitHubIcon style={{ fontSize: 45, color: "black" }} />
              </a>}
              &nbsp;
              {props.liveLink&&<a href={props.liveLink} target="_blank">
                <LinkIcon
                  style={{
                    fontSize: 45,
                    color: "black",
                    transform: "rotate(45deg)",
                  }}
                />
              </a>}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Project;
