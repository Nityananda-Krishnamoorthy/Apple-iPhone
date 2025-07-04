import { useEffect, useState } from 'react'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { heroVideo, smallHeroVideo } from '../utils';


const Hero = () => {
   const [videoSrc, setVideoSrc] = useState(heroVideo); // default to desktop

useEffect(() => {
  const handleVideoSrcSet = () => {
    const isMobile = window.innerWidth < 760;
    setVideoSrc(isMobile ? smallHeroVideo : heroVideo);
  };

  handleVideoSrcSet(); // run initially
  window.addEventListener("resize", handleVideoSrcSet);

  return () => {
    window.removeEventListener("resize", handleVideoSrcSet);
  };
}, []);

    useGSAP(() => {
        gsap.to("#hero", {
            opacity: 1,
            delay: 2,
        })
        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            delay: 2,

        })
    },[])
  return (
    <section className="w-full nav-height bg-black
    relative">
        <div className='h-5/6 w-full flex-center flex-col'>
            <p id='hero' className='hero-title motion-safe-fade-in'>iPhone 15 Pro</p>
            <div className='md:w-10/12 w-9/12'>
            <video   
            className="pointer-events-none w-full h-auto"
            autoPlay
            muted
            playsInline
            preload="auto"
             controls={false}
            key={videoSrc} 
            >
                <source src={videoSrc}  type='video/mp4'/>
            </video>
            </div>
        </div>
        <div id='cta'
        className='flex flex-col items-center opacity-0
        translate-y-20 '
        >
            <a href="#highligths" className='btn'>Buy</a>
            <p className='font-normal text-l'>From $199/
                month or $999</p>
        </div>
       

    </section>
  )
}

export default Hero