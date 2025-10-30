'use client'
import React from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Skills() {

    useGSAP(()=>{
        let t = gsap.timeline()
        t.from("#skillcover",{
            delay:1.5,
            duration:0.7,
            opacity:0,
            y:-10
        })
        t.from("#skillblur",{
            duration:1.4,
            opacity:0,
        })
        t.from("#skilldescription h1",{
            opacity:0,
            x:-15,
            duration:0.6,
            ease:"power3.out"
        })
        t.from("#skilldescription p",{
            delay:-0.3,
            opacity:0,
            x:-15,
            duration:0.6,
            ease:"power3.out"
        })
    })
    return(
        <>

        <div id="skillcover">
            
        </div>

        <div id="skillblur"></div>

        <div id="skilldescription">
            <h1>MAGIC !!</h1>
            <p>I started card magic in Class 10, when I first watched Shin Lim on AGT. I was mesmerized by his act and thought, “How did he do that?” Since then, I’ve been deeply into magic, observing many great magicians like Eric Chien and Will Tsai — they’re just phenomenal.

I also post my own magic clips on Instagram. You can check them out below .</p>
        </div>
        </>
    )
}

export default Skills