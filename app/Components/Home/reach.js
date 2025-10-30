'use client'
import React from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from "next/link";
function Reach() {
  useGSAP(()=>{
    gsap.from("#social",{
      duration:0.6,
      delay:1.4,
      y:-10,
      opacity:0
    })
  })
    return (
        <>
        <div id="bot">
            <div id="social">
                {/* <Link href="/">
        <img src="/home.svg" alt="Home" width="32" height="32" />
      </Link> */}

      <a href="https://www.instagram.com/raghu_pratapsingh/?hl=en-gb" target="_blank" rel="noopener noreferrer">
        <img src="/insta.jpg" alt="Instagram" width="32" height="32"/>
      </a>

      <a href="https://www.linkedin.com/in/raghu-pratap-singh-474bb6326/" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.png" alt="LinkedIn" width="32" height="32" />
      </a>

      <a href="https://github.com/Raghu-Pratap-Singh" target="_blank" rel="noopener noreferrer">
        <img src="/github.png" alt="GitHub" width="32" height="32" />
      </a>

      <a href="https://leetcode.com/u/_Raghu_0/" target="_blank" rel="noopener noreferrer">
        <img src="/leet.webp" alt="LeetCode" width="32" height="32" />
      </a>
            </div>
            </div>
        </>
    )
}

export default Reach