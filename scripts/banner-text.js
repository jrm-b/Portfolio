import { gsap } from 'gsap';
import SplitTextJS from 'split-text-js';

export function textAnimation(){

    const titles = gsap.utils.toArray('.hero-text');
    const tl = gsap.timeline({ repeat: -1,  yoyo: false, delay: 1, });

    const alternance = document.getElementById('alternance');
    const splitAlternance = new SplitTextJS( alternance );

    titles.forEach(title => {
        const splitTitle = new SplitTextJS( title );
        tl.from(splitTitle.chars, {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: .02,
        }, "<").to(splitTitle.chars, {
            opacity: 1,
            y: -80,
            rotateX: 90,
            stagger: .02,
        }, "<1")

    });

    gsap.from(splitAlternance.chars, {
        y: 200,
        delay: 3,
        stagger: {
            each: .03,
            from: "center",
            ease: "ease"
        },
    });   
}
