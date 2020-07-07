import React, { useState } from "react";
import "./index.css";
import Navbar from "../home/navbar";
import GetAppIcon from '@material-ui/icons/GetApp';
const Resume = () => {
    return <div className="container full-screen">
        <Navbar />
        <div className="restOfPage">
        <a className="fade-in"  href="#">
                <GetAppIcon style={{ fontSize: 500, color: "whitesmoke",}}/></a></div>
    </div>;
}

export default Resume;
