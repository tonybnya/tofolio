import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

function Scrollbar() {
  return (
    <div className="relative text-3xl flex flex-col gap-y-3 text-gray-400">
      <AiFillGithub />
      <AiFillLinkedin />
      <AiFillTwitterCircle />
    </div>
  )
}

export default Scrollbar;