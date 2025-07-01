import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import {rightImg, watchImg} from "../utils"
import VideoCarousel from './VideoCarousel'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
        // Animate the title
        gsap.fromTo(
            '#title',
            { y: 50, opacity: 0 },
            {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#title',
                start: 'top 90%',
                end: 'top 60%',
                toggleActions: 'play none none reverse',
                markers: false, // set to true to debug
            },
            }
        );

        // Animate the .link elements with stagger
        gsap.fromTo(
            '.link',
            { y: 50, opacity: 0 },
            {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.link',
                start: 'top 90%',
                end: 'top 60%',
                toggleActions: 'play none none reverse',
                markers: false, // set to true to debug
            },
            }
        );
        }, []);
  return (
    <section id='highlights'
    className='w-screen overflow-hidden h-full 
    common-padding bg-zinc'
    >
        <div className='screen-max-width'>
            <div className='mb-12 w-full  md:flex items-end justify-between'>
                <h1 id='title' className='section-heading'>
                    Get the highlights.
                </h1>
                <div className="flex flex-wrap items-end gap-5">
                    <p className='link '>Watch the film
                        <img src={watchImg} alt="watch"
                         className='ml-2'/>
                    </p>
                    <p className='link'>Watch the event
                        <img src={rightImg} alt="right"
                         className='ml-2'/>
                    </p>
                </div>
            </div>
            <VideoCarousel />
        </div>

    </section>
  )
}

export default Highlights