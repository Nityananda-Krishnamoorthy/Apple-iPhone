import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

   animateWithGsap(
  '.g_fadeIn',
  {
    y: 0,
    opacity: 1,
    ease: 'power2.out',
    duration: 1,
    stagger: 0.25, // Animate elements one after another
  },
  {
    start: 'top 90%',
    scrub: false,
    markers: false, // You can enable this for debugging
  }
);

  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="chip-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="chip-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14 px-4">
          <div className="relative w-full max-w-[700px] mx-auto aspect-[16/9] rounded-[56px] overflow-hidden">
          {/* VIDEO */}
          <video
            className="absolute top-1/2 left-1/2 w-[96%] h-[80%] rounded-3xl object-cover -translate-x-1/2 -translate-y-1/2"
            playsInline
            muted
            loop
            autoPlay
            controls={false}
            ref={videoRef}
          >
            <source src={frameVideo} type="video/mp4" />
          </video>


          {/* FRAME */}
          <img
            src={frameImg}
            alt="frame"
            className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
          />
        </div>

          <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
        </div>

          <div className="chip-text-container">
                <div className="flex flex-1 justify-center flex-col gap-7">
                  <p className="chip-text g_fadeIn">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p className="chip-text g_fadeIn">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,{' '}
                     with incredibly detailed environments 
                     and more realistic characters. And with 
                     industry-leading speed and efficiency, A17 
                     Pro takes fast and runs with it.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="chip-text">New</p>
                <p className="chip-bigtext">Pro-class GPU</p>
                <p className="chip-text">with 6 cores</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks