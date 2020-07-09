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
          <a href="https://github.com/orgs/MemoryOrganizer/people/langstonBS" >
            <img src={Github} alt="" width="35" />
          </a>
          <a href="https://www.linkedin.com/in/langston-beckwith-stanley-831436161/" >
            <img src={LinkedIn} alt="" width="35"/>
          </a>
        </div>

        <div>
          <h3>Hunter Danielson</h3>
          <p>Bio coming</p>
          <img />
          <a href="https://github.com/hunterdanielson" >
            <img src={Github} alt="" width="35"/>
          </a>
          <a href="https://www.linkedin.com/in/hunter-danielson" >
            <img src={LinkedIn} alt="" width="35" />
          </a>
        </div>

        <div>
          <h3>Nikki Kiga</h3>
          <p>Bio coming</p>
          <img />
          <a href="https://github.com/nikki-kiga" >
            <img src={Github} alt="" width="35"/>
          </a>
          <a href="https://www.linkedin.com/in/nikkikiga/" >
            <img src={LinkedIn} alt="" width="35" />
          </a>
        </div>

        <div>
          <h3>Jaime Sanders</h3>
          <p>Bio coming</p>
          <img />
          <a href="https://github.com/jaimekinsley" >
            <img src={Github} alt="" width="35"/>
          </a>
          <a href="https://www.linkedin.com/in/jaimelyn/" >
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
