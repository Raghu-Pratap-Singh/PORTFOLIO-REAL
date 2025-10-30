'use client'
import React from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
function Page() {
  // 👇 This animation will run only on large screens
  useGSAP(()=>{
    let mm = gsap.matchMedia();
    mm.add("(min-width: 700px)", () => {
    let t = gsap.timeline()
    t.from("#description",{
      delay:0.8,
      duration:0.7,
      opacity:0,
      
    })
    t.from("#myself",{
      duration:0.6,
      ease:"power3.out",
      opacity:0,
      y:-10
    })
    t.from("#back",{
      duration:1,
      x:35,
      ease:"power2.out",
      opacity:0
    })
    t.from("#Symbol",{
      delay:-0.4,
      duration:0.6,
      ease:"power3.out",
      opacity:0,
      y:-10
    })

  });
  })

  useGSAP(()=>{
    let mm = gsap.matchMedia();

    mm.add("(max-width: 700px)", () => {
      let t = gsap.timeline()
      t.to("#back",{
        duration:0.5,
        y:10,
        ease:"power2.out",
        opacity:1,
        delay:1,
      })
      t.from("#myself",{
      duration:0.6,
      ease:"power3.out",
      opacity:0,
      y:-10
    })
    })
  })
  
  return (
    <>
      <div id="flowy"></div>
      <div id="flowcover"></div>
      <div id="description"></div>

      <div id="Symbol"></div>

      <div id="centerback">

      <div id="back"></div>

      </div>

      <div id="parawrap">


      <div id="myself">
        <p>
          Hi, I’m Raghu Pratap Singh 
A Creative Frontend Developer
I craft visually engaging and user-friendly web experiences.
With a strong foundation in Data Structures & Algorithms,
I bring both design flair and technical depth to every project.
        </p>
      </div>
      </div>
    </>
  )
}

export default Page