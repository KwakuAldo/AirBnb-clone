import React from 'react';
import HeroImg from '/Group 77.jpg'

function Hero() {
    return (
        <section>
            <div className='hero-img-container'>
                <img className='hero-img' src={HeroImg} alt="" />
            </div>
            <h1>Online Experiences</h1>
            <p className='hero-p'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}

export default Hero;