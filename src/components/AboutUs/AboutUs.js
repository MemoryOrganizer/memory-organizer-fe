import React, { Component } from 'react';
import Github from '../../images/github.jpg';
import LinkedIn from '../../images/linkedin.jpg';
import { Link } from 'react-router-dom';

// use components to remove code duplicaiton
const Developer = ({ name, bio, github, linkedin}) => (
  <div>
    <h3>{name}</h3>
    <p>{bio}</p>
    <img />
    <a href={github}target="_blank" >
      <img src={Github} alt="" width="35" />
    </a>
    <a href={linkedin} target="_blank" >
      <img src={LinkedIn} alt="" width="35"/>
    </a>
  </div>
)


export default class AboutUs extends Component {
  render() {
    return (
      <>
        <Developer
          name="Langston Beckwith-Stanley"
          bio="Bio coming"
          github="https://github.com/langstonBS"
          linkedin="https://www.linkedin.com/in/langston-beckwith-stanley-831436161/" />

        <div>
          <h3>Hunter Danielson</h3>
          <p>Bio coming</p>
          <img />
          <a href="https://github.com/hunterdanielson" target="_blank">
            <img src={Github} alt="" width="35"/>
          </a>
          <a href="https://www.linkedin.com/in/hunter-danielson" target="_blank">
            <img src={LinkedIn} alt="" width="35" />
          </a>
        </div>

        <div>
          <h3>Nikki Kiga</h3>
          <p>Bio coming</p>
          <img />
          <a href="https://github.com/nikki-kiga" target="_blank">
            <img src={Github} alt="" width="35"/>
          </a>
          <a href="https://www.linkedin.com/in/nikkikiga/" target="_blank">
            <img src={LinkedIn} alt="" width="35" />
          </a>
        </div>

        <div>
          <h3>Jaime Sanders</h3>
          <p>Bio coming</p>
          <img />
          <a href="https://github.com/jaimekinsley" target="_blank">
            <img src={Github} alt="" width="35"/>
          </a>
          <a href="https://www.linkedin.com/in/jaimelyn/" target="_blank">
            <img src={LinkedIn} alt="" width="35" />
          </a>
        </div>

        <footer>
          <Link to='/'><h3>Homepage</h3> </Link>
        </footer>
      </>
    );
  }
}
