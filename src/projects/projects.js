import React, { useState } from "react";
import Navbar from "../home/navbar";
import Project from "./project";
import "./index.css";

let projects = [
  {
    name: "To Doer",
    desc:
      "This is an app created by me and a teammate from Re:Coded Front-end Web Development Bootcamp. It is a to do app simply, using FirebaseDB to hold the info, for creating the website we used ReactJS, for styling we used Material UI.",
    githubLink: "https://github.com/gbilgedal/to-doers-0",
    liveLink: "https://5eef77bbc272650007e35406--sad-pare-bc6f4d.netlify.app/",
    index: 0,
  },
  {
    name: "Mad Libs",
    desc:
      "This is an app created by me and a teammate from Re:Coded Front-end Web Development Bootcamp. It is reflection of a game called Mad Libs.",
    githubLink: "https://github.com/gbilgedal/mad-libs",
    liveLink: "https://madlibs-project.netlify.app/",
    index: 1,
  },
  {
    name: "SULJAK Suicide Prevention and Detection",
    desc:
      "This is a web application for reaching out to the people who have suicidal tendencies, offering them instant support and helping them improve their mental state with other methods.",
    githubLink: "https://github.com/ReCoded-Org/istanbul-capstone-sdp/",
    liveLink: "https://suicide-detection.netlify.app/",
    index: 2,
  },
  {
    name: "The Quick Brown Fox",
    desc: "This is a slide the tile and connect the road game made in Java. Implemented a clean user interface using JavaFX. Wrote recursive functions for the detection of level endings.",
    githubLink: "https://github.com/gbilgedal/TheQuickBrownFox",
    liveLink: "",
    index: 3,
  },
];

const renderProjects = (projectList = projects) => {
  let renderElements = projectList.map((el, i) => {
    return (
      <Project
        name={el.name}
        desc={el.desc}
        github={el.githubLink}
        liveLink={el.liveLink}
        picLink={el.picLink}
        index={el.index}
        key={i}
      />
    );
  });
  return renderElements;
};

const Projects = () => {
  return (
    <div className="container full-screen ">
      <Navbar />

      <div className=" projects">
        <div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <span className="label fade-in">My Projects</span>
          </div>
          {renderProjects(projects)}
        </div>
      </div>
    </div>
  );
};

export default Projects;
