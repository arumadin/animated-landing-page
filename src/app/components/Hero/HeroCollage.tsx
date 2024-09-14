import Image from 'next/image'
import React from 'react'
import {photos, videos} from '@/data'

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
            fill={true}
            objectFit='cover'/>
        </div>
    )
}

export default function HeroCollage() {
    const leftImages = photos.slice(0, 2)
    const rightImages = photos.slice(2, photos.length)

    const [leftVideo, rightVideo] = videos;
    return (
        <div className='hero-collage'>
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
