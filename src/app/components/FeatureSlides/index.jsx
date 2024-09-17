"use client"
import React, { useRef, useState } from 'react'
import {featureSlides} from '@/data'
import cn from 'classnames'
import FeatureSlide from './FeatureSlide'
import './style.scss'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)

function RenderImages({featureIndex}) {
    return featureSlides.map(({imageUrl}, index) => (
        <div className={cn("feature-image", {"as-primary" : featureIndex === index})}
        key={imageUrl}
        style={{backgroundImage: `url(${imageUrl})`}}
        >
        </div>
    ))
}
export default function FeatureSlides() {
    const [featureIndex, setFeatureIndex] = useState(0)
    const featureSliderRef = useRef(null)
    const featureSlidesRightRef = useRef(null)

    useGSAP(() => {
        function stopTrigger() {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: featureSlidesRightRef.current,
                    start: "top top",
                    end: () => `+=${featureSliderRef.current.offsetHeight}`,
                    scrub: true,
                    pin: true
                }
            })
            return tl
        }

        const master = gsap.timeline();
        master.add(stopTrigger())
    })
    return (
        <div ref={featureSliderRef} className='feature-slides-container'>
            <div className='feature-slides-left'>
                {featureSlides.map((feature, index) => (
                    <FeatureSlide
                    updateActiveImage={setFeatureIndex}
                    key={feature.imageUrl}
                    title={feature.title}
                    description={feature.description}
                    index={index}/>
                ))}

            </div>
            <div ref={featureSlidesRightRef} className='feature-slides-right'>
                <RenderImages featureIndex={featureIndex}/>
            </div>
        </div>
    )
}
