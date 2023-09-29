// Fullpage js
import fullpage from 'fullpage.js'
import '../node_modules/fullpage.js/dist/fullpage.css'
import '../css/style.css';

// ANIMATIONS

// Three.js anim
import { earth } from './earth.js';

// Gsap anim
import { textAnimation } from './banner-text';

// function main(){
//   new fullpage('#fullpage', {
//     // Navigation
//     licenceKey: 'OPEN-SOURCE-GPLV3-LICENSE',
//     menu: '#menu',
//     // navigation: true,
//     navigationTooltips: ['home', 'about', 'skills', 'contact'],
//     anchors: ['home', 'about', 'skills', 'contact'],
//     // Scrolling
//     scollingSpeed: 600,
//   });
  
// // };

earth();

new fullpage('#fullpage', {
  // Navigation
  licenceKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  menu: '#menu',
  // navigation: true,
  navigationTooltips: ['home', 'about', 'skills', 'contact'],
  anchors: ['home', 'about', 'skills', 'contact'],
  // Scrolling
  scollingSpeed: 600,
});

textAnimation();

// window.onload = main();



