"use client"
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)

export default function HeroHeader() {
    useGSAP(() => {
        gsap.fromTo(
            '#hero-text',
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.8,
                delay: 0.2
            }
        )
    })
  return (
    <div className='hero-text-section'>
        <h1 id='hero-text'>Stories meet their widest audience ever</h1>
    </div>
  )
}
