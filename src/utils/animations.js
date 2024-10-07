import gsap from "gsap/all";

import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)


export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        ScrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollProps,
        }
    })
}