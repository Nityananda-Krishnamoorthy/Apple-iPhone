import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.utils.toArray(target).forEach((el, index) => {
    gsap.fromTo(
      el,
      { y: 100, opacity: 0 }, // from
      {
        ...animationProps,
        scrollTrigger: {
          trigger: el,
          start: scrollProps?.start || 'top 85%',
          toggleActions: scrollProps?.toggleActions || 'play none none reverse',
          markers: scrollProps?.markers || false,
          scrub: scrollProps?.scrub || false,
        },
        delay: scrollProps?.stagger ? index * scrollProps.stagger : 0,
      }
    );
  });
};

export const animateWithGsapTimeline = (timeline, rotationRef, 
    rotationState, firstTarget, secondTarget, animationProps) => {
        timeline.to(rotationRef.current.rotation, {
            y: rotationState,
            duration: 1,
            ease: 'power2.inOut'
        })

        timeline.to(
            firstTarget,
            {
                ...animationProps,
                ease:'power2.inOut'
            },
            '<'
        )
         timeline.to(
            secondTarget,
            {
                ...animationProps,
                ease:'power2.inOut'
            },
            '<'
        )

}