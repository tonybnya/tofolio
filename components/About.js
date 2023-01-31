import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <section id="about">
      <h1 className="title">about me</h1>
      <div className="content flex justify-between">
        <div className="description">
          <h2>Get to know me</h2>
          <Link className="btn uppercase font-bold" href="/#contact">contact</Link>
        </div>
        <div className="skills">
          <h2>Main Skills</h2>
        </div>
      </div>
    </section>
  )
}

export default About;