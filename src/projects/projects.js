import React, { useState } from "react";
import Navbar from "../home/navbar";
import Project from "./project";
import "./index.css";

let projects = [{
    name:"To Doer",
    desc:"This is an app created by me and a teammate from Re:Coded Front-end Web Development Bootcamp. It is a to do app simply, using FirebaseDB to hold the info, for creating the website we used ReactJS, for styling we used Material UI.",
    githubLink:"",
    liveLink:"",
    index:0
}, {
        name: "Mad Libs",
        desc: "This is an app created by me and a teammate from Re:Coded Front-end Web Development Bootcamp. It is reflection of a game called Mad Libs.",
        githubLink: "",
        liveLink: "",
        index: 1
    },];



const renderProjects = (projectList=projects) => {
    let renderElements = projectList.map((el,i) => {
        
        return <Project name={el.name} desc={el.desc}
        github={el.githubLink} liveLink={el.liveLink}
        picLink={el.picLink} index={el.index} key={i} />
    });
    return renderElements;
};


const Projects = () => {
    return <div className="container full-screen ">
        <Navbar />  

        <div className=" projects">
            <div>
            <div style={{width:"100%", textAlign:"center"}}><span className="label fade-in">My Projects</span></div>
            {renderProjects(projects)}
            </div>
            
            </div>
    </div>;
}

export default Projects;
