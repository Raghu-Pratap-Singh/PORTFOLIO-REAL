'use client'
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Projects() {

    useGSAP(()=>{
        let t = gsap.timeline()
        t.from("#projectcontainer a",{
            delay:1.7,
            // y:-40,
            scale:0.8,
            opacity:0,
            duration:1,
            stagger:0.5,
            ease:"power4.inOut"
        })
    })
  return (

    <>
    
    <div id="projectbackcover">
      <video
        src="/projectback.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="video-bg"
      />
    </div>

    <div id="projectcontainer">
        <a href="https://coruscating-blini-36fb32.netlify.app/">SHORTEST PATH SIMULATOR</a>
        <a href="https://sunny-sprite-44347a.netlify.app/">WEATHER APP</a>
        <a href="https://pypi.org/project/segment-tree-visualizer/">SEGMENT TREE VISUALISER</a>
        

    </div>
    </>
    

  );
}

export default Projects;
