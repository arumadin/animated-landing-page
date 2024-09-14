import React from 'react'
import './style.scss'
import HeroHeader from './HeroHeader'
import HeroUsedBy from './HeroUsedBy'
import HeroFooter from './HeroFooter'
import HeroCollage from './HeroCollage'
import HeroPhoneBlock from './HeroPhoneBlock'

function Hero() {
    return (
        <div className='hero-container'>
            <HeroHeader />
            <div className="hero-media">
                <HeroCollage />
                <HeroPhoneBlock />
            </div>
            <HeroUsedBy />
            <HeroFooter />
        </div>
    )
}

export default Hero