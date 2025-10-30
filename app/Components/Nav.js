'use client'
import React, { useState } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from "next/link";
function Nav() {

  
  let [stat, setStat] = useState(false);

  
  function come() {
    let t = gsap.timeline()
    if(stat == false) {
      t.to("#menu",{
        height:"100vh",
        duration:0.1
      })
      t.to("#menu div" ,{
        delay:0.3,
        duration:0.4,
        stagger:0.06,
        width:"100vw"
      })
      t.to("#pages",{
        zIndex:4,
        delay:-0.2
      })
      t.to("#pages",{
        delay:-0.3,
        opacity:1,
        duration:0.5
      })
      t.to("#contactme",{
        zIndex:4,
        delay:-0.3
      })
      t.to("#contactme",{
        opacity:1,
        duration:0.4,
        delay:-0.3
      })
      t.from("#contactme p",{
        delay:-0.3,
        y:-20,
        opacity:0,
        duration:0.5,
        ease:"power2.out",
        stagger:0.2
      })
      setStat(true)
    }


    else{
      t.to("#contactme",{
        opacity:0,
        duration:0.4
      })
      t.to("#contactme",{
        zIndex:-1
      })
      t.to("#pages",{
        delay:-0.5,
        opacity:0,
        duration:0.5
      })
      t.to("#pages",{
        zIndex:-1
      })
      t.to("#menu div" ,{
        delay:-0.4,
        duration:0.4,
        stagger:0.06,
        width:"0vw"
      })
      t.to("#menu",{
        height:"0vh",
        duration:0.1
      })
      setStat(false)
    }

  }
  
  return (
    <>
    <div id="homego">
          
          <Link href="/" onClick={()=>{
            if(stat == true){
              come()
            }
          }}>
        <img src="/home.svg" alt="Home" width="32" height="32" />
      </Link>
        </div>
        <div id="toggle" onClick={come}>
          III
        </div>

        <div id="menu">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          
        </div>



        <div id="pages">
          <Link href = "/Projects" onClick={come}>PROJECTS</Link>
          <Link href = "/Skills" onClick={come}>SKILLS</Link>

        </div>

        <div id="contactme">
          <p>Contact: +91 9760001059</p>
          <p>email: raghupratapsinghparmar@gmail.com</p>
        </div>
    </>
  )
}

export default Nav