import React, { Component } from 'react';
import Github from '../../images/github.jpg';
import LinkedIn from '../../images/linkedin.jpg';
import { Link } from 'react-router-dom';


export default class AboutUs extends Component {
  render() {
    return (
      <>
        <div>
          <h3>Langston Beckwith-Stanley</h3>
          <p>Bio coming</p>
          <img />
          <a href="https://github.com/langstonBS" target="_blank" >
            <img src={Github} alt="" width="35" />
          </a>
          <a href="https://www.linkedin.com/in/langston-beckwith-stanley-831436161/" target="_blank" >
            <img src={LinkedIn} alt="" width="35"/>
          </a>
        </div>

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
