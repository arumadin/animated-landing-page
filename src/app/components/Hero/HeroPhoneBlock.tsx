"use client"
import React, { useRef } from 'react'
import imgSrc from "@/assets/hero-phone-frame-v2.png"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)

const videoUrl = "https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0";

export default function HeroPhoneBlock() {
    const phoneRef = useRef(null)
    useGSAP(() => {
        function intro() {
            const tl = gsap.timeline()

            tl.fromTo(phoneRef.current,
                { y: 200 },
                {
                    y: 0,
                    duration: 1
                }
            )

            return tl
        }

        function stopTrigger() {
            const tl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: phoneRef.current,
                    start: 'top top',
                    end: "+=650",
                    scrub: true,
                    // markers: true
                }
            });

            tl.to(phoneRef.current, 
                {
                    y: 650,
                    scale: 1.2,
                }
            )
            
            tl.to('.hero-container', 
                {
                    backgroundColor: 'black',
                    duration: 0.1
                },
                "<50%"
            )
            return tl
        }

        const master = gsap.timeline();
        master.add(intro())

        setTimeout(() => {
            master.add(stopTrigger())
        }, 2000)
    })
    return (
        <div className="hero-phone-black" ref={phoneRef}>
            <div className='hero-phone-template'
                style={{ backgroundImage: `url(${imgSrc.src})` }}>
                <video className='collageElement'
                    playsInline
                    autoPlay
                    webkit-playsinline="true"
                    loop
                    src={videoUrl}>

                </video>
            </div>
        </div>
    )
}
