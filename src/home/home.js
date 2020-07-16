import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./navbar";

const Home = () => {
  let definitions = [
    <span className="def fade-in">a full time learner</span>,
    <span className="def fade-in">free software lover</span>,
    <span className="def fade-in">infosec newbie</span>,
    <span className="def fade-in">front end developer</span>,
    <span className="def fade-in">full stack (stb) developer</span>,
  ];
  let [def, setDef] = useState(definitions[0]);
  let counter = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      setDef(definitions[counter]);
      counter++;
      if (counter === definitions.length) {
        counter = 0;
      }
    }, 1971);
    return () => clearInterval(interval);
  }, []);
  /*const changingDefs = () => {
        //why does this go exponential
        console.log("hello");
        setInterval(changingDefs,1000);
    }*/

  return (
    <div className="container full-screen ">
      <Navbar />
      <div className="restOfPage">
        <div className="hello">
          <span className="greeting fade-in">Welcome!</span>
        </div>
        <div className="nameTag ">
          <span className="myName fade-in">G. Bilge Dal</span>
          <br />
          {def}
        </div>
      </div>
    </div>
  );
};

export default Home;
