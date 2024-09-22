import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { DiAtom } from 'react-icons/di';

const Social = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center p-5 lg:p-10'>
      <div className="flex items-center text-xl lg:text-2xl font-bold text-red-800 mb-4 lg:mb-0">
        <DiAtom className="text-3xl lg:text-4xl" />
        <a href="/" className="ml-2">PrintMe</a>
      </div>
      <div className='flex items-center text-red-600 text-3xl space-x-5'>
        <FaFacebook />
        <FaInstagramSquare />
        <FaLinkedin />
        <FaXTwitter />
        <FaYoutube />
        <FaGithub />
        <FaReddit />
      </div>
    </div>
  )
}

export default Social;
