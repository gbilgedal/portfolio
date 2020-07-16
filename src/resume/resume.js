import React, { useState } from "react";
import "./index.css";
import Navbar from "../home/navbar";
import GetAppIcon from "@material-ui/icons/GetApp";
const Resume = () => {
  return (
    <div className="container full-screen">
      <Navbar />
      <div className="restOfPage">
        <a
          target="_blank"
          className="fade-in"
          href="https://docs.google.com/document/d/1xbYBg7EJYcP_ba7yhxh2C72sj9Ky2fqDFYGyhNf8VTM/edit?usp=sharing"
        >
          <GetAppIcon style={{ fontSize: 500, color: "whitesmoke" }} />
        </a>
      </div>
    </div>
  );
};

export default Resume;
