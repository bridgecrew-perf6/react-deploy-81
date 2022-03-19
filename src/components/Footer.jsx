import React from 'react';
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="relative z-50 bg-slate-800">
    <div className="flex justify-center">
      <div className="flex">
      <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://github.com/trrgomez" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}}/>
          <SocialIcon url="https://linkedin.com/in/tirsa-gomez-847807191" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width:35}}/>

      </div>
    </div>
    </div>
  </footer>
  )
}
