import React from "react";
import "./App.scss";

import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/work" component={Works} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Works() {
  return <p>Merging Storytelling in Web Development
    <a href="https://github.com/Burhnan"> <b>Github</b> </a></p>
          

}

function About() {
  return <p>A littel about me.
    <a href="https://www.linkedin.com/in/abhishek-dixit-63933861/"> <b>LinkedIN</b> </a></p>

}

function Contact() {
  return <p>Feel free to reach me.
    <a href="https://www.linkedin.com/in/abhishek-dixit-63933861/"> <b>LinkedIN</b> </a> </p>
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          I <b>Abhishek Dixit</b>, am a creative, storyteller with 4 years of experience in designing and developing websites and apps using REACT/REDUX, Javascript, HTML, CSS, Bootstrap, rest API's. I love learning newer technologies and implementing them on my passion projects. Technologies that I am currently implementing are AR.js, A-frame, THREE.js, GLSL and Google Dialogflow.
        </h5>
      </div>
    </div>
  );
}
export default App;
