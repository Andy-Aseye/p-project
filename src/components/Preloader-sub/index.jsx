import React from "react";
import { useEffect } from "react";
import './style.css';
import {Power2, Power3, gsap } from "gsap";


export default function PreloaderPage () {  

	const tl = gsap.timeline({});

	useEffect(()=> {
		tl.from(".text", {
	ease: Power2.easeInOut,
	opacity: 0,
	// y: 100,
	duration: 1.8,
	})
	tl.from("#left", {
		x: 520, 
		y: 260,
		duration: 2.2,
	})
	tl.from("#right", {
		x: -520, 
		y: 260,
		duration: 2.2,
	}, "<")
	tl.from("#b-left", {
		x: 520, 
		y: -260,
		duration: 2.2,
	}, "<")
	tl.from("#b-right", {
		// x: -600, 
		// y: -300,
		duration: 2.2,
	}, "<")
	tl.from(".object-animation", {
		ease: Power3.easeInOut,
		opacity: 0,
		duration: 1,
		// delay: .8,
	})
	tl.to(".object-animation", {
		ease: Power3.easeInOut,
		opacity: 0,
		duration: 1,
		delay: 2,
	})
	tl.to(".text", {
		ease: Power2.easeInOut,
		opacity: 0,
		duration: 1,
	}, "<")
	tl.to("#preloader", {
            duration: 1,
			height: "0vh",
	})


	}, [])

	

	

return (
    <div id="preloader">
        <div className="row-pair" id="top-row">
            <div className="col text" id="left" style={{marginLeft: "3vw"}}>Portfolio</div>
            <div className="col text" id="right" style={{marginRight: "3vw"}}>Developer</div>
        </div>
        <div className="row">
            <div className="object-animation">
            <div class="socket">
			<div class="gel center-gel">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c1 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c2 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c3 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c4 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c5 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c6 r1">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			
			<div class="gel c7 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			
			<div class="gel c8 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c9 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c10 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c11 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c12 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c13 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c14 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c15 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c16 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c17 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c18 r2">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c19 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c20 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c21 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c22 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c23 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c24 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c25 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c26 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c28 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c29 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c30 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c31 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c32 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c33 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c34 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c35 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c36 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			<div class="gel c37 r3">
				<div class="hex-brick h1"></div>
				<div class="hex-brick h2"></div>
				<div class="hex-brick h3"></div>
			</div>
			
		</div>
            </div>
        </div>
        <div className="row-pair" id="bottom-row">
            <div className="col text" id="b-left" style={{marginLeft: "3vw"}}>© 2023</div>
            {/* <div className="col text" id="b-right">{Date()}</div> */}
        </div>
    </div>
)
}





































// import React, { useEffect}  from "react";
// import { gsap } from "gsap";
// // import Pace from 'react-pace-progress';
// import Bvid from './assets/video-b.mp4'


// import "./style.css";
// import { FormGroup } from "react-bootstrap";

// export default function preloaderPage () { 

//  useEffect(() => {
//     gsap.from(".letter", {
//         y: -20,
//         duration:  0.8,
//         opacity: 0,
//         ease: "power3.inOut",
//         stagger: 0.1,
//     });
    
//     gsap.to(".top-left, .top-right", {
//         top: "0",
//         duration: 2,
//         delay:  2,
//         ease: "power3.inOut",
//     });
    
//     gsap.to(".bottom-right", {
//         bottom: "0",
//         duration: 2,
//         delay:  2,
//         ease: "power3.inOut",
//     });
    
//     gsap.to(".top-left", {
//         right: "0",
//         duration: 2,
//         delay:  4,
//         ease: "power3.inOut",
//     });
    
//     gsap.to(".bottom-right", {
//         right: "0",
//         duration: 2,
//         delay:  4,
//         ease: "power3.inOut",
//     });
    
//     gsap.to(".block-left", {
//         left: "-50%",
//         duration: 2,
//         delay:  4,
//         ease: "power3.inOut",
//     });
    
//     gsap.to(".block-right", {
//         right: "-50%",
//         duration: 2,
//         delay:  4,
//         ease: "power3.inOut",
//     });


//  }, [])

// return(
// <div className="container">
//     <video autoPlay playsInline muted loop>
//         <source src={Bvid} type="video/mp4" />
//     </video>
//     <div className="wrapper">
//         <div className="copy">
//             <p>LA 3435, <br>TY0 98234</br></p>
//             <p>thinking about the future</p>
//             <p>enter <br>terminal</br></p>
//             <p></p>
//         </div>
//     </div>
//     <div className="blocks">
//         <div className="block block-left"></div>
//         <div className="block block-right"></div>
//     </div>
//     <div className="letters">
//         <div className="row">
//             <div className="letter top-left">Andy Sedzifa</div>
//             <div className="letter top-right">Frontend Developer</div>
//         </div>
//         <div className="row">
//             <div className="letter bottom-left">Portfolio</div>
//             <div className="letter bottom-right">2023</div>
//         </div>
//     </div>
// </div>

// );
// }