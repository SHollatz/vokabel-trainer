import React, { Component } from "react";
import "./About.css";
import portrait from '../../images/me.JPG';

class Games extends Component {
  render() {
    return (
      <div id="main_content_about">
        <h2>About Sabine</h2>
        <hr></hr>
        <p id="about_me"><img id="portrait" src={portrait} alt="Sabine Hollatz"></img>Sabine is a Front-End Web Developer
            with experience in Machine Learning and a background in Education, specialized in Science Education. Her drive is to
            provide excellent user experiences to people all over the world. She is persistent in solving complex problems and
            enjoys designing useful applications. Her programming experience in Java, Python, and JavaScript, using the MERN Stack
            (MongoDB, Express, React, Node.js) gives her a strong foundation to learn new frameworks and stacks quickly. She is a good
            listener for her customers' interests and works well when collaborating with others or independently.
            <br></br> If not at work, you can usually find Sabine riding her motorcycle, brewing
              a new beer recipe, or singing karaoke enthusiastically.
        </p>
      </div>
    );
  }
}
export default Games;

