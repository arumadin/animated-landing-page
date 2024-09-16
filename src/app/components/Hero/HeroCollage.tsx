"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import {photos, videos} from '@/data'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)

function VideoElement({ src }: { src: string }) {
    return (
        <div className="hero-element">
            <video
                className='collage-element'
                playsInline={undefined}
                autoPlay
                webkit-playsinline="true"
                loop
                src={src}
            ></video>
        </div>
    )
}

function ImageElement({ src }: { src: string }) {
    return (
        <div className="hero-element">
            <Image src={src} 
            className='collage-element' 
            alt='' 
            fill={true}/>
        </div>
    )
}

export default function HeroCollage() {
    const leftImages = photos.slice(0, 2)
    const rightImages = photos.slice(2, photos.length)

    const [leftVideo, rightVideo] = videos;

    const container = useRef<HTMLDivElement>(null)
    const tl = useRef()

    useGSAP(() => {
        let tl = gsap.timeline({
            delay: 0.5
        })

        tl.fromTo('.hero-element', 
            {
                y: 300
            },
            {
                y: 0,
                duration: 1,
                delay: function(index) {
                    return 0.2 * index
                }
            }
        )
    }, {scope: container})
    
    return (
        <div className='hero-collage' ref={container}>
            <div className="left-column">
                {leftImages.map((src, idx) => (
                    <ImageElement src={src} key={idx}/>
                ))}
                <VideoElement src={leftVideo}/>
            </div>
            <div className="right-column">
                {rightImages.map((src, idx) => (
                    <ImageElement src={src} key={idx}/>
                ))}
                <VideoElement src={rightVideo}/>

            </div>
            </div>
    )
}
