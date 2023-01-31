import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <section id="hero" className="text-center p-10">
      <h1 className="font-it font-bold text-5xl text-blue-500">Tony B. NYA</h1>
      <div className="subtitle my-1 text-gray-400 font-bold">
        <h3>Software Engineer.</h3>
        <h3>Web Developer.</h3>
      </div>
      <p className="font-it text-xl p-10 text-gray-400">
        I am a Software Engineer and Web Developer from Cameroon. You can browse my projects down below. My contact are also there. Let us get in touch and have fun. Happy Coding!
      </p>
      <Link className="btn uppercase font-bold" href="/#projects">projects</Link>
    </section>
  )
}

export default Hero;