import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <section id="about">
      <h1 className="title">about me</h1>
      <div className="content flex flex-col items-center">
        <div className="description">
          <h2>Get to know me</h2>
          <Link className="btn uppercase font-bold" href="/#contact">contact</Link>
        </div>
        <div className="skills">
          <h2>Main Skills</h2>
          <div className="items">
            <div className="skill">
              <i className="fa-brands fa-html5"></i><span>HTML</span>
            </div>
            <div className="skill">
              <i className="fa-brands fa-css3"></i><span>CSS</span>
            </div>
            <div className="skill">
              <i className="fa-brands fa-sass"></i><span>SASS</span>
            </div>
            <div className="skill">
              <span>Tailwind</span>
            </div>
            <div className="skill">
              <i className="fa-brands fa-bootstrap"></i><span>Bootstrap</span>
            </div>
            <div className="skill">
              <i className="fa-brands fa-python"></i><span>Python</span>
            </div>
            <div className="skill">
              <i className="fa-brands fa-js"></i><span>JavaScript</span>
            </div>
            <div className="skill">
              <span>C</span>
            </div>
            <div className="skill">
              <span>Flask</span>
            </div>
            <div className="skill">
              <span>Django</span>
            </div>
            <div className="skill">
              <i className="fa-brands fa-react"></i><span>React</span>
            </div>
            <div className="skill">
              <i className="fa-brands fa-angular"></i><span>Angular</span>
            </div>
            <div className="skill">
              <i className="fa-brands fa-figma"></i><span>Figma</span>
            </div>
            <div className="skill">
              <span>SQL</span>
            </div>
            <div className="skill">
              <span>Firebase</span>
            </div>
            <div className="skill">
              <span>MySQL</span>
            </div>
            <div className="skill">
              <i className="fa-brands fa-git"></i><span>Git</span>
            </div>
            <div className="skill">
              <span>Shell Bash</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;