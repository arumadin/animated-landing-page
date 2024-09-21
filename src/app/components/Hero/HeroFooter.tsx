"use client"
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function HeroFooter() {
    const ref = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: "top center",
                end: 'top 25%',
                scrub: true,
                // markers: true
            }
        })

        tl.to(".hero-container", 
            { 
                backgroundColor: 'white', 
                duration: 0.25,
            },
        )
    })

    return (
        <div ref={ref} className="hero-text-section">
            <h1 id='hero-text'>Visual stories that feel like yours, because they are.</h1>
        </div>
    )
}
