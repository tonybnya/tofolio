import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profile from '../public/profile-pic.png';
import { BsFillMoonStarsFill } from 'react-icons/bs';

function Navbar() {
  return (
    <nav className="py-5 mb-10 flex justify-between">
      <Link className="brand flex items-center cursor-pointer" href="/">
        <Image width={45} height={45} src={profile} alt=" Tony B. NYA's profile picture" />
      </Link>
      <ul className="flex items-center font-ms capitalize">
        <li className="link">
          <Link href='/'>home</Link>
        </li>
        <li className="link">
          <Link href='/#about'>about</Link>
        </li>
        <li className="link">
          <Link href='/#projects'>projects</Link>
        </li>
        <li className="link">
          <Link href='/#contact'>contact</Link>
        </li>
        <li className="link">
          <Link href='/#blog'>blog</Link>
        </li>
        <li>
          <Link className="btn" href='#'>resume</Link>
        </li>
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-xl"/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;