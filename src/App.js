import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Contact from "./contact/contact";
import Projects from "./projects/projects";
import Resume from "./resume/resume";
import BlogPosts from "./blogposts/blogposts";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/portfolio" component={Home}></Route>
        <Route exact path="/portfolio/about" component={About}></Route>
        <Route exact path="/portfolio/contact" component={Contact}></Route>
        <Route exact path="/portfolio/projects" component={Projects}></Route>
        <Route exact path="/portfolio/resume" component={Resume}></Route>
        <Route exact path="/portfolio/blogposts" component={BlogPosts}></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
